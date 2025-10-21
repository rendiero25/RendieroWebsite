import { motion } from "motion/react";

const BoxPortfolio = ({bgColor, width, height, backgroundImage, paddingX, paddingY}) => {
    return (
        <motion.div
            className={`${bgColor} ${width} ${height} ${paddingX} ${paddingY} rounded-lg`}
            style={{backgroundImage: {backgroundImage}}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className={`${titleColor} ${titleSize} ${titleWeight} ${titleLineHeight}`}>{title}</h1>
                <p className={`${descriptionColor} ${descriptionSize} ${descriptionWeight} ${descriptionLineHeight}`}>{description}</p>
            </div>
            
        </motion.div>
    );
};

export default BoxPortfolio;
