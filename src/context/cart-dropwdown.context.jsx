import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    isOpen: false,
    setIsOpen: null,
    items: null,
});

export const CartDropdownProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = isOpen;

    return (
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    );
};
