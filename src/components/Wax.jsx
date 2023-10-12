import { waxingServices } from '../ServicesData';

const Wax = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-6 text-white">
      <h2 className="font-bold text-3xl font-primary">Waxing Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {waxingServices.map((service, index) => (
          <li key={index} className=" flex justify-between w-full text-center flex-col items-center mb-3">
            <div className='flex'>
              <p className="text-xl flex">{service.serviceName} </p>
            <p className='font-bold text-xs flex items-center'> {service.price}</p>
            </div>
            
            <p className='text-xs flex justify-start'>{service.serviceLength}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wax;