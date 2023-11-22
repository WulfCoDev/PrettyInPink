import React, { useState } from 'react';
import { facialServices } from '../ServicesData';
import { FaCalendarPlus, FaInfoCircle } from "react-icons/fa";


const Facials = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mb-6 text-white">
      <h2 className="text-3xl font-sixth mb-4 neon">Facial Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {facialServices.map((service, index) => (
          <li
            key={index}
            className={`w-full text-center flex justify-center flex-col items-center mb-4 h-[${expandedItem === index ? 'auto' : '50'}px] transition-height duration-300 ease-in-out  overflow-hidden`}
          >
            
              <div className="flex">
                <p className="text-xl flex font-tertiary">{service.serviceName} </p>
              </div>
              <div className="flex gap-x-4 justify-between items-center text-xs m-2">
              <button  className='p-2 bg-pink-300 rounded-lg shadow-sm shadow-black'><p>Book Now</p></button>
                <button onClick={() => handleItemClick(index)} className='p-2 bg-pink-300 rounded-lg shadow-sm shadow-black'><p>What to Expect</p></button>
              </div>
              {expandedItem === index && (
                <div className="text-xs mt-2">
                  <p className='font-other'>{service.description}</p>
                  <div className="flex gap-x-1 justify-center items-center m-2">
                <p className="text-xs font-tertiary">{service.serviceLength} | </p>
                <p className="font-bold text-xs font-tertiary"> ${service.price}</p>
              </div>
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facials;
