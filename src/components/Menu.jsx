import Eyelashes from "./Eyelashes";
import Facials from "./Facials";
import Wax from "./Wax";

const Menu = () => {

    return (
        <div>
            <div className="container mx-auto border-solid border-white border-2 m-6 h-[800px] shadow-xl bg-pink-300/60">
                {/* Title */}
                <div className="flex justify-center items-center m-6">
                    <h1 className="text-white font-secondary text-2xl lg:text-6xl uppercase tracking-wider">Pretty in Pink</h1>
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