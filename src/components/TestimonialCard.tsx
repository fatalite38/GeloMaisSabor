import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    rating: number;
    comment: string;
    // image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className="ml-1">
          <h3 className="font-nunito font-bold text-lg text-gray-800">{testimonial.name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="font-nunito text-gray-600 italic">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialCard;