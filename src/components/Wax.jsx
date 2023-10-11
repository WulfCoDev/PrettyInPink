import { waxingServices } from '../ServicesData';

const Wax = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h2 className="font-bold text-lg">Wax Services</h2>
      <ul className="flex flex-col items-center max-w-md">
        {waxingServices.map((service, index) => (
          <li key={index} className=" flex justify-between w-full p-2 text-center">
            <p className="text-sm">{service.serviceName} ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wax;