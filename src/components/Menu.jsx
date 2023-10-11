import Eyelashes from "./Eyelashes";
import Facials from "./Facials";
import Wax from "./Wax";

const Menu = () => {

    return (
        <div>
            <div className="container mx-auto border-solid border-2 border-black m-6 h-[800px] bg-white/80 shadow-xl">
                {/* Title */}
                <div className="flex justify-center items-center m-6">
                    <h1 className="text-black font-secondary text-2xl lg:text-6xl uppercase tracking-wider">Pretty in Pink</h1>
                </div>

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