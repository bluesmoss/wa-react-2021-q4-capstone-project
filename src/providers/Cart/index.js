import React, {createContext, useContext, useEffect} from "react";
import { GENERAL, OPERATIONS } from "../../utils/constants";

const CartContext = createContext()

export const useCartContext = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error(`CartContext provider is not found`);
    }

    return context;    
};

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = React.useState(GENERAL.PRODUCT_EMPTY)
    const [itemsInCart, setItemsInCart] = React.useState([])
    const [currentProduct, setCurrentProduct] = React.useState({})
    const [total, setTotal] = React.useState(0)
    

    useEffect(() => {
        if (Object.keys(currentProduct).length){
            setItemsInCart(prevItems => {
                
                const exist = [...prevItems].find((element) => {
                    return element.id === currentProduct.id
                })

                if(exist){
                    const newItems = [...prevItems].map(element => {
                        if (element.id ===  currentProduct.id) {
                            const newCount =  (currentProduct.operation === OPERATIONS.ADD) ? element.quantity + currentProduct.quantity : currentProduct.quantity;
                            return {
                                ...element,
                                quantity: newCount,
                                subtotal: newCount * currentProduct.data.price
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
        setTotal( prevTotal => {
            let totalUpdated = 0;
            itemsInCart.forEach(element => {
                totalUpdated += element.subtotal
            })
            return totalUpdated
        })
    }, [ itemsInCart])


    useEffect(() => {
        console.log('nne total', total);
    }, [ total])    

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            itemsInCart,
            setItemsInCart,
            currentProduct,
            setCurrentProduct,
            total,
            setTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

