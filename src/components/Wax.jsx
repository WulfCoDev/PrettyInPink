import { waxingServices } from '../ServicesData';

const Wax = () => {
  return (
    <div className='container mx-auto'>
        <div><h2 className="font-bold text-lg">Waxing Services</h2></div>
      
      <ul>
        {waxingServices.map((service, index) => (
          <li key={index} className="flex justify-between items-center text-center">
            <h3 className="text-sm">{service.serviceName}</h3>
            <p className="text-sm">{service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wax;