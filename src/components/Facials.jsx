import React, { useState } from 'react';
import { facialServices } from '../ServicesData';

const Facials = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container mx-auto flex flex-col items-center mb-6 text-white">
      <h2 className="font-bold text-3xl font-primary">Facial Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {facialServices.map((service, index) => (
          <li
            key={index}
            className={`w-full text-center flex justify-center flex-col items-center mb-3 h-[${expandedItem === index ? 'auto' : '50'}px] transition-height duration-300 ease-in-out  overflow-hidden`}
          >
            <button
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => handleItemClick(index)}
            >
              <div className="flex">
                <p className="text-xl flex font-tertiary">{service.serviceName} </p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-xs flex justify-start font-tertiary">{service.serviceLength} | </p>
                <p className="font-bold text-xs flex items-center font-tertiary"> ${service.price}</p>
              </div>
              {expandedItem === index && (
                <div className="text-xs mt-2">
                  <p className='font-other'>{service.description}</p>
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facials;
