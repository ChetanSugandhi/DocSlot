import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  date: string;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'March 15, 2024',
    comment: 'Outstanding service! Dr. Wilson was incredibly thorough and took the time to explain everything. The online booking system made scheduling a breeze.'
  },
  {
    id: '2',
    name: 'Emma Thompson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'March 12, 2024',
    comment: 'I\'ve been seeing Dr. Chen for my knee problems, and the improvement has been remarkable. The staff is always friendly and professional.'
  },
  {
    id: '3',
    name: 'David Garcia',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 4,
    date: 'March 10, 2024',
    comment: 'Very impressed with the pediatric care. Dr. Rodriguez was amazing with my daughter and made her feel comfortable throughout the visit.'
  },
  {
    id: '4',
    name: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'March 8, 2024',
    comment: 'The facility is modern and clean. I appreciate how easy it was to schedule an appointment online and the reminder system is great.'
  },
  {
    id: '5',
    name: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'March 5, 2024',
    comment: 'Exceptional care from start to finish. The doctors here really listen to your concerns and provide comprehensive treatment plans.'
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 4,
    date: 'March 3, 2024',
    comment: 'I\'ve been coming here for years and have always received excellent care. The new online portal makes managing appointments so much easier.'
  }
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Patient Testimonials</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read what our patients have to say about their experiences with our healthcare services and medical professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
            
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < testimonial.rating
                      ? 'text-yellow-400'
                      : 'text-gray-200'
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">{testimonial.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
          Share Your Experience
        </button>
      </div>
    </div>
  );
};

export default Testimonials;