import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Activity, Calendar, Star, MapPin, BookOpen } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value }: { icon: any, title: string, value: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <Icon className="h-8 w-8 text-blue-600" />
      <div className="ml-4">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with top healthcare professionals and book appointments with ease
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/find-doctor"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Find a Doctor
          </Link>
          <Link
            to="/appointment"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <StatCard icon={Users} title="Available Doctors" value="500+" />
        <StatCard icon={Activity} title="Specialties" value="50+" />
        <StatCard icon={Calendar} title="Appointments" value="10,000+" />
        <StatCard icon={Star} title="Patient Satisfaction" value="98%" />
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/appointment"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Calendar className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Book Appointment</h3>
          <p className="text-gray-600">Schedule your visit with top healthcare professionals</p>
        </Link>

        <Link
          to="/find-doctor"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <MapPin className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Find Location</h3>
          <p className="text-gray-600">Locate our healthcare facilities near you</p>
        </Link>

        <Link
          to="/contact"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Learn More</h3>
          <p className="text-gray-600">Discover our services and healthcare solutions</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;