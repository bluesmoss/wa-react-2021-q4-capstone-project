import React from "react";
import { StyledTable } from './styled'
import PropTypes from 'prop-types';
import { useCartContext } from "../../../providers/Cart";
import { Link } from "react-router-dom";
import remove from "../../../assets/delete.png";
import { QuantitySelector, Wrapper } from "../../Common";
import { GENERAL, OPERATIONS } from "../../../utils/constants";


function Table({checkout}){
    const { itemsInCart, setCartItems, setCurrentProduct } = useCartContext()

    const handleControls = (operation, productId) => {
        const product = itemsInCart.find((element) => {
            return element.id === productId
        })
        const productQuantity = product['quantity'];
        const stock =  product['data'].stock
        const quantityUpdated = getQuantity({ operation, stock, productQuantity})
        product['operation'] = OPERATIONS.UPDATE
        product['quantity']  =  quantityUpdated

        setCurrentProduct(product)

        setCartItems(prevCartItem => {
            let cartItemUpdated = (operation === OPERATIONS.ADD) ? prevCartItem + GENERAL.SINGLE_ELEMENT : prevCartItem - GENERAL.SINGLE_ELEMENT
            
            if ( operation === OPERATIONS.REMOVE){
                cartItemUpdated = prevCartItem - productQuantity
            }

            return cartItemUpdated
        })
    }



    const getQuantity = ({ operation, stock, productQuantity}) => {

        const quantityOperation = {
            'add': function () {
            return productQuantity < stock ? productQuantity + GENERAL.SINGLE_ELEMENT : stock;;
            },
            'rest': function () {
            return productQuantity > GENERAL.PRODUCT_EMPTY ? productQuantity - GENERAL.SINGLE_ELEMENT : GENERAL.PRODUCT_EMPTY;
            },
            'remove': function () {
            return  GENERAL.PRODUCT_EMPTY;
            }
        };

        return quantityOperation[operation]();
    }


    return (

            <StyledTable>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th className={checkout ? "hide": ""}>Remove product</th>
                    </tr>
                </thead>
                <tbody>
                    { itemsInCart.map((item) => (

                        item.quantity > GENERAL.PRODUCT_EMPTY &&
                        <tr key={item.id}>
                            <th>
                                <Link  className="table__product"  to={`/product/${item.id}`}>
                                    <img className="table__image" src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
                                    <span>{item.data.name}</span>                                
                                </Link>
                            </th>
                            <th>{item.data.price.toFixed(GENERAL.DECIMAL_TO_SHOW)}</th>
                            <th className="table__quantity">
                                <Wrapper className={checkout ? "hide": ""}>
                                    <QuantitySelector stock={item.data.stock} quantity={item.quantity} productId={item.id} handleControls={handleControls}/>
                                </Wrapper>
                                <span className={checkout ? "show": "hide"} >{item.quantity}</span>
                            </th>
                            <th>{item.subtotal.toFixed(GENERAL.DECIMAL_TO_SHOW)}</th>
                            <th className={checkout ? "hide": ""}>
                                <button className="table__remove" onClick={()=> handleControls(OPERATIONS.REMOVE, item.id)}>
                                    <img className="table__remove-button" src={remove} alt="remove"/>
                                </button>
                            </th>
                        </tr>                       
                    ))}                        
                </tbody>
            </StyledTable>            
   
    )
}

Table.propTypes = {
    checkout: PropTypes.bool,
};
  


export { Table }