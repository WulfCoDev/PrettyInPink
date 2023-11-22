import Eyebrows from "./Eyebrows";
import Eyelashes from "./Eyelashes";
import Facials from "./Facials";
import Wax from "./Wax";

const Menu = () => {

    return (
        <div>
            <div className="container mx-auto border-solid border-black border-2 m-6 bg-white/10 shadow-xl shadow-black">
                {/* Title */}
                <div className="flex font-sixth text-[5rem] justify-center items-center h-[400px] flex-col">
                    <h1 className="neonText lg:text-6xl uppercase text-center h-[100px]">Prettie</h1>
                    <h1 className="neonText lg:text-6xl uppercase text-center h-[100px]">in</h1>
                    <h1 className="neonText lg:text-6xl uppercase text-center h-[100px]">Pink</h1>
                </div>
                {/* Image */}
                <div className="flex justify-center items-center mb-7">
                    <img src="/header.png" alt="headerImg"/>
                </div>

                {/* Services */}
                <div>
                    <Facials />
                    <Wax />
                    <Eyelashes />
                    <Eyebrows />
                </div>

            </div>
        </div>
    )
};

export default Menu;