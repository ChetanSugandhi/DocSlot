import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, Award, Building, Phone, Mail } from 'lucide-react';

const DoctorProfile = () => {
  const { id } = useParams();

  // Mock doctor data (in a real app, this would come from an API)
  const doctor = {
    id,
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400',
    rating: 4.8,
    reviews: 127,
    experience: 15,
    hospital: 'Central Hospital',
    education: [
      'MD - Cardiology, Stanford University',
      'Residency - Johns Hopkins Hospital',
      'Board Certified in Cardiovascular Disease'
    ],
    availability: {
      Monday: '9:00 AM - 5:00 PM',
      Tuesday: '9:00 AM - 5:00 PM',
      Wednesday: '9:00 AM - 1:00 PM',
      Thursday: '9:00 AM - 5:00 PM',
      Friday: '9:00 AM - 5:00 PM'
    },
    contact: {
      email: 'dr.wilson@centralhospital.com',
      phone: '+1 (555) 123-4567'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{doctor.specialty}</p>
            
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="text-gray-700 mr-2">{doctor.rating}</span>
              <span className="text-gray-500">({doctor.reviews} reviews)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{doctor.experience} Years Experience</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{doctor.hospital}</span>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Education & Experience */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education & Experience</h2>
            <ul className="space-y-3">
              {doctor.education.map((edu, index) => (
                <li key={index} className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span className="text-gray-700">{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{doctor.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{doctor.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(doctor.availability).map(([day, hours]) => (
              <div key={day} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-gray-900 mb-2">{day}</h3>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;