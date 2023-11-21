import Eyelashes from "./Eyelashes";
import Facials from "./Facials";
import Wax from "./Wax";

const Menu = () => {

    return (
        <div>
            <div className="container mx-auto border-solid border-white border-2 m-6 bg-black/10">
                {/* Title */}
                <div className="flex justify-center items-center m-2 h-[200px] mb-4">
                    <h1 className="neonText text-white font-fourth text-6xl lg:text-6xl uppercase tracking-wider text-center">Prettie <br/> in <br/> Pink</h1>
                </div>
                {/* Image */}
                

                {/* Services */}
                <div>
                    <Facials />
                    <Wax />
                    <Eyelashes />
                </div>

            </div>
        </div>
    )
};

export default Menu;