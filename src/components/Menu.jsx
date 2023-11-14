import Eyelashes from "./Eyelashes";
import Facials from "./Facials";
import Wax from "./Wax";

const Menu = () => {

    return (
        <div>
            <div className="container mx-auto border-solid border-white border-2 m-6 shadow-xl bg-pink-500/30">
                {/* Title */}
                <div className="flex justify-center items-center m-6">
                    <h1 className="text-white font-secondary text-4xl lg:text-6xl uppercase tracking-wider text-center">Prettie in Pink</h1>
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