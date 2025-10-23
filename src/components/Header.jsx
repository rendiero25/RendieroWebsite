import { useHeaderContext } from "../context/HeaderContext";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import MenuIcon from "../assets/Header/menu.png";
import { IoIosCloseCircle } from "react-icons/io";

const Header = () => {

    const { isOpen, setIsOpen } = useHeaderContext();
    const navigate = useNavigate();

    const goToAboutMe = () => {navigate("/about-me");}
    const goToPortfolio = () => {navigate("/portfolio");}
    const goToIndex = () => {navigate("/");}
    
    return (
        <div className="absolute z-10 flex flex-row justify-between items-center pt-5 px-5 w-full">
            <span className="text-white text-2xl font-bold">rendiero.</span>

            <img src={MenuIcon} alt="menu toogle" className="w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        
            {isOpen && (
                <motion.div 
                    className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-background to-[#0B1126]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col justify-center items-center w-full h-full gap-10">
                        <IoIosCloseCircle onClick={() => setIsOpen(!isOpen)} className="size-[3rem] xl:size-[5rem] cursor-pointer text-white mb-10"/>
                        <button onClick={goToIndex} className="cursor-pointer text-white font-secondary text-5xl font-medium">Home</button>
                        <button onClick={goToAboutMe} className="cursor-pointer text-white font-secondary text-5xl font-medium">About Me</button>
                        <button onClick={goToPortfolio} className="cursor-pointer text-white font-secondary text-5xl font-medium">Portfolio</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Header;