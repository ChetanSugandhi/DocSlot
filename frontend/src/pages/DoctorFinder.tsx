import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  rating: number;
  image: string;
  availability: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiology',
    hospital: 'Central Hospital',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    availability: 'Available Today'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedics',
    hospital: 'City Medical Center',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    availability: 'Next Available: Tomorrow'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    hospital: 'Children\'s Hospital',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    availability: 'Available Today'
  }
];

const specialties = [
  'All Specialties',
  'Cardiology',
  'Orthopedics',
  'Pediatrics',
  'Neurology',
  'Dermatology',
  'Ophthalmology'
];

const locations = [
  'All Locations',
  'Central Hospital',
  'City Medical Center',
  'Children\'s Hospital',
  'Downtown Clinic',
  'West Medical Center'
];

const DoctorFinder = () => {
  const [specialty, setSpecialty] = useState('All Specialties');
  const [location, setLocation] = useState('All Locations');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Doctor</h1>
        <p className="text-gray-600">Search from our network of trusted healthcare professionals</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search by doctor name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            {specialties.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-gray-600 text-sm">{doctor.hospital}</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-gray-600 text-sm">{doctor.rating} / 5.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-600 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {doctor.availability}
                </span>
                <Link
                  to={`/doctor/${doctor.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorFinder;