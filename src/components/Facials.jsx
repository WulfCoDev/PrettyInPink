import { facialServices } from "../ServicesData";


const Facials = () => {


    return (
        <div className="container mx-auto">
            <div>
                <h2 className="font-bold text-lg">Facial Services</h2>
            <ul className="flex flex-col items-center w-[300px]">
                {facialServices.map ((service, index) => (
                    <li key={index} className="w-[300px]">
                        <div className="flex m-2">
                            <div className="flex-1"><h3 className="text-sm">{service.serviceName}</h3></div>
                            <div><p className="text-sm">{service.serviceLength}</p></div>
                            <div><p className="text-sm">{service.price}</p></div>
                        
                        </div>
                        
                        
                        
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    )
};

export default Facials;