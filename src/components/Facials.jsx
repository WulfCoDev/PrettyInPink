import React from 'react';
import { facialServices } from '../ServicesData';

const Facials = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-6 text-white">
      <h2 className="font-bold text-3xl font-primary">Facial Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {facialServices.map((service, index) => (
          <li key={index} className=" flex justify-between w-full text-center flex-col items-center mb-3">
            <div className='flex'>
              <p className="text-xl flex font-tertiary">{service.serviceName} </p>
            
            </div>
            <div className='flex gap-x-1'>
              <p className='text-xs flex justify-start font-tertiary'>{service.serviceLength} | </p>
              <p className='font-bold text-xs flex items-center font-tertiary'> ${service.price}</p>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facials;
