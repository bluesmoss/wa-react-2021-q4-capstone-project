import React, {createContext, useContext, useEffect} from "react";
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
    const [itemsInCart, setItemsInCart] = React.useState([])
    const [currentProduct, setCurrentProduct] = React.useState({})

    useEffect(() => {
        if (Object.keys(currentProduct).length){
            setItemsInCart(prevItems => {
                
                const exist = [...prevItems].find((element, index) => {
                    return element.id === currentProduct.id
                })

                if(exist){
                    const newItems = [...prevItems].map(element => {
                        if (element.id ===  currentProduct.id) {
                            return {
                                ...element,
                                quantity: element.quantity + currentProduct.quantity
                            };                            
                        }
                        return element;
                    })
                    return [...newItems]
                }
                else{
                    return [...prevItems, currentProduct]
                }
            })
        }


    }, [cartItems, currentProduct])    
    
    useEffect(() => {
        console.log('change itemsInCart', itemsInCart);

    }, [ itemsInCart])

    return (
        <HeaderContext.Provider value={{
            openModal,
            setOpenModal,
            searchValue,
            setSearchValue,
            cartItems,
            setCartItems,
            itemsInCart,
            setItemsInCart,
            currentProduct,
            setCurrentProduct
        }}>
            {children}
        </HeaderContext.Provider>
    )
}

