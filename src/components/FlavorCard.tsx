import React from 'react';
import type { Flavor } from './FlavorsSection';

interface FlavorCardProps {
  flavor: Flavor;
  isActive: boolean;
  onClick: () => void;
}

const FlavorCard: React.FC<FlavorCardProps> = ({ flavor, isActive, onClick }) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${
        isActive ? 'scale-105 ring-4 ring-primary-800' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={flavor.image} 
          alt={`Sabor ${flavor.name}`} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 opacity-20 ${flavor.color}`}></div>
      </div>
      
      <div className={`p-5 ${flavor.bgColor} transition-colors duration-300 ${flavor.hoverColor} group`}>
        <h3 className={`font-nunito font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-gray-800'
        }`}>
          {flavor.name}
        </h3>
        
        <p className={`font-nunito text-sm transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-gray-600 group-hover:text-white'
        }`}>
          {flavor.description}
        </p>
      </div>
    </div>
  );
};

export default FlavorCard;