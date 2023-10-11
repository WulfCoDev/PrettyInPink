import React from 'react';
import { facialServices } from '../ServicesData';

const Facials = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h2 className="font-bold text-lg">Facial Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {facialServices.map((service, index) => (
          <li key={index} className=" flex justify-between w-full p-2 text-center">
            <p className="text-sm">{service.serviceName} ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facials;
