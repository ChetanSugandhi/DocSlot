import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DoctorFinder from './pages/DoctorFinder';
import Appointment from './pages/Appointment';
import DoctorProfile from './pages/DoctorProfile';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-doctor" element={<DoctorFinder />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;