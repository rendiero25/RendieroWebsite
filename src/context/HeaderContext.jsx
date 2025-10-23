import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => { return useContext(HeaderContext) };
