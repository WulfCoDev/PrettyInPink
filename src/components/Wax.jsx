import { waxingServices } from '../ServicesData';

const Wax = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-6 text-white">
      <h2 className="font-bold text-2xl">Waxing Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {waxingServices.map((service, index) => (
          <li key={index} className=" flex justify-between w-full text-center flex-col">
            <div className='flex'>
              <p className="text-lg flex justify-start mx-2">{service.serviceName} </p>
            <p className='font-bold text-sm flex items-center'> {service.price}</p>
            </div>
            
            <p className='text-sm flex justify-start'>{service.serviceLength}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wax;