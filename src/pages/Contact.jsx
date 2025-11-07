import { motion } from "motion/react";

import MailSvg from "../assets/AboutMe/mail.svg";
import WhatsappSvg from "../assets/AboutMe/whatsapp.svg";

const Contact = () => {

    const goToMail = () => {
        window.open("mailto:workspace.rendy@gmail.com", "_blank", "noopener,noreferrer");
    }

    const goToWhatsapp = () => {
        window.open("https://wa.me/6281298790058?text=Halo,Saya%20tertarik%20dengan%20portfolio%20Anda,%20bisa%20berdiskusi%20lebih%20lanjut%20mengenai%20pembuatan%20website?", "_blank", "noopener,noreferrer");
    }

    return (
        <div className="bg-[url(../bg.jpg)] bg-no-repeat bg-cover bg-center w-full h-screen">
            <div className="w-full h-full flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center items-start gap-8"
                >
                    <p className="text-white text-2xl lg:text-lg 2xl:text-xl lg:max-w-xl font-normal text-center lg:text-left leading-normal">With an educational background in technology, I'm an 
                        Whether you’re looking for a web developer to bring your idea to 
                        life or want to collaborate on a creative project, I’d love to 
                        hear from you. Send me a message and let’s make something amazing 
                        happen together.
                    </p>

                    <div className="flex flex-row justify-between items-center gap-8">
                        <img src={MailSvg} alt="MailIcon" className="cursor-pointer w-13 lg:w-15" onClick={goToMail}/>
                        <img src={WhatsappSvg} alt="WhatsappIcon" className="cursor-pointer w-13 lg:w-15" onClick={goToWhatsapp}/>
                    </div>
                </motion.div>
                
                
            </div>
        </div>
    );
};

export default Contact;
