import { motion } from "motion/react";
import Rec1 from "../assets/Index/Rec1.jpg";
import ArrowRight from "../assets/Index/arrow-right.png";
import Pic from "../assets/Index/Pic.jpg";

const Index = () => {
    return (
        <div className="bg-background w-full min-h-screen p-8">
            <div className="flex flex-col gap-8 justify-between items-center">
                <div className="h-[40vh] w-full flex flex-col lg:flex-row justify-between items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-[50%] h-full px-20 py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Rec1})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h1 className="text-white text-5xl font-medium leading-tight">Your vision, My code. Let’s built something that matters</h1>        
                       
                        <button className="cursor-pointer flex flex-row justify-between items-center bg-black rounded-full w-full p-2">
                            <span className="text-white text-2xl font-normal pl-8">Let's Discuss</span>
                            <img src={ArrowRight} alt="ArrowRight" className="w-12"/>
                        </button>                
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-[30%] h-full px-20 py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Pic})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >              
                    </motion.div>
                        
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="w-[20%] h-full px-20 py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Rec1})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h1 className="text-white text-5xl font-medium leading-tight">Your vision, My code. Let’s built something that matters</h1>        
                       
                        <button className="cursor-pointer flex flex-row justify-between items-center bg-black rounded-full w-full p-2">
                            <span className="text-white text-2xl font-normal pl-8">Let's Discuss</span>
                            <img src={ArrowRight} alt="ArrowRight" className="w-12"/>
                        </button>                
                    </motion.div>                    
                </div>

                <div className="h-[60vh] w-full flex flex-col lg:flex-row justify-between items-start gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-1/2 h-full px-20 py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Rec1})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h1 className="text-white text-5xl font-medium leading-tight">Your vision, My code. Let’s built something that matters</h1>        
                       
                        <button className="cursor-pointer flex flex-row justify-between items-center bg-black rounded-full w-full p-2">
                            <span className="text-white text-2xl font-normal pl-8">Let's Discuss</span>
                            <img src={ArrowRight} alt="ArrowRight" className="w-12"/>
                        </button>                
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-[30%] h-[50%] px-20 py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Pic})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >              
                    </motion.div>
                        
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-[20%] h-[50%] px-20 py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Rec1})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h1 className="text-white text-5xl font-medium leading-tight">Your vision, My code. Let’s built something that matters</h1>        
                       
                        <button className="cursor-pointer flex flex-row justify-between items-center bg-black rounded-full w-full p-2">
                            <span className="text-white text-2xl font-normal pl-8">Let's Discuss</span>
                            <img src={ArrowRight} alt="ArrowRight" className="w-12"/>
                        </button>                
                    </motion.div>                    
                </div>
            </div>
        </div>
    );
};

export default Index;
