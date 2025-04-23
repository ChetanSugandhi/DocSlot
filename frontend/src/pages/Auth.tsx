import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type AuthMode = 'login' | 'signup';
type Role = 'patient' | 'doctor';

const Auth = () => {
  const navigate = useNavigate(); // Use the navigate hook to redirect
  const [mode, setMode] = useState<AuthMode>('login');
  const [role, setRole] = useState<Role>('patient');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === 'signup') {
        const res = await axios.post(
          'http://localhost:3000/api/auth/register',
          { ...formData, role },
          { withCredentials: true } // Include credentials (session cookies)
        );
        console.log('Signup Success:', res.data);
        setSuccessMessage('Registered successfully! Please log in.'); // Set success message
        setTimeout(() => {
          setMode('login'); // Change mode to login after showing success message
        }, 2000); // Wait for 2 seconds before redirecting

      } else {
        const res = await axios.post(
          'http://localhost:3000/api/auth/login',
          { email: formData.email, password: formData.password },
          { withCredentials: true } // Include credentials (session cookies)
        );
        console.log('Login Success:', res.data);
        navigate('/');
      }
    } catch (err: any) {
      console.error('Error details:', err);
      alert(err.response?.data?.message || err.message || 'Something went wrong!');
    }
  };

  const redirectToLogin = () => {
    navigate('/login'); // Redirect to the login page after 2 seconds
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {mode === 'login' ? 'Login to Your Account' : 'Create an Account'}
        </h2>

        {successMessage && (
          <div className="text-center text-green-600 mb-4">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <>
              <Input
                icon={<User />}
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                icon={<Phone />}
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </>
          )}

          <Input
            icon={<Mail />}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            icon={<Lock />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            toggleEye={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />

          {mode === 'signup' && (
            <div className="flex justify-center gap-4 mt-2">
              <button
                type="button"
                onClick={() => setRole('patient')}
                className={`px-4 py-2 rounded-md ${role === 'patient' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Patient
              </button>
              <button
                type="button"
                onClick={() => setRole('doctor')}
                className={`px-4 py-2 rounded-md ${role === 'doctor' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Doctor
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>

          <p className="text-center text-sm mt-2">
            {mode === 'login' ? (
              <>
                Don't have an account?{' '}
                <button onClick={() => setMode('signup')} className="text-blue-600 font-medium">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setMode('login');
                    setTimeout(redirectToLogin, 2000); // Redirect after 2 seconds
                  }}
                  className="text-blue-600 font-medium"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

type InputProps = {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleEye?: () => void;
  showPassword?: boolean;
};

const Input = ({ icon, type, placeholder, value, onChange, toggleEye, showPassword }: InputProps) => {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {toggleEye && (
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          onClick={toggleEye}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}
    </div>
  );
};

export default Auth;
