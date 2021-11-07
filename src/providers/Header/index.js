import React, {createContext, useContext} from "react";
import { GENERAL } from "../../utils/constants";

const HeaderContext = createContext()

export const useHeaderContext = () => {
    const context = useContext(HeaderContext)

    if (!context) {
        throw new Error(`HeaderContext provider is not found`);
    }

    return context;    
};

export const HeaderProvider = ({children}) => {
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const [cartItems, setCartItems] = React.useState(GENERAL.PRODUCT_EMPTY)
 
  
    return (
        <HeaderContext.Provider value={{
            openModal,
            setOpenModal,
            searchValue,
            setSearchValue,
            cartItems,
            setCartItems
        }}>
            {children}
        </HeaderContext.Provider>
    )
}

