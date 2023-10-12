import React from 'react';
import { facialServices } from '../ServicesData';

const Facials = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-6 text-white">
      <h2 className="font-bold text-lg">Facial Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {facialServices.map((service, index) => (
          <li key={index} className=" flex justify-between w-full p-2 text-center flex-col">
            <p className="text-sm flex justify-start">{service.serviceName} {service.price}</p>
            <p className='text-sm flex justify-start'>{service.serviceLength}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facials;
