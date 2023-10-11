import { eyelashServices } from '../ServicesData';

const Eyelashes = () => {
  return (
    <div className="container mx-auto">
        <div>
            <h2 className='font-bold text-lg'>Eyelash Services</h2> 
        </div>
     
      <ul>
        {eyelashServices.map((service, index) => (
          <li key={index} className="flex justify-between items-center text-center">
            <h3 className="text-sm">{service.serviceName}</h3>
            <p className="text-sm">{service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eyelashes;