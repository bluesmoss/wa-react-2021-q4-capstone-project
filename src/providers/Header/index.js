import React, {createContext, useContext} from "react";

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

    return (
        <HeaderContext.Provider value={{
            openModal,
            setOpenModal,
            searchValue,
            setSearchValue,
        }}>
            {children}
        </HeaderContext.Provider>
    )
}

