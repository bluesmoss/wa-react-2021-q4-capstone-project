import React from "react";
import PropTypes, { element } from 'prop-types';
import { StyledTable } from './styled'
import { useCartContext } from "../../../providers/Cart";
import { Link } from "react-router-dom";
import remove from "../../../assets/delete.png";
import { QuantitySelector, Wrapper } from "../../Common";


function Table({stock, handleAddCart}){
    const { itemsInCart } = useCartContext()

    console.log('en la tabla', itemsInCart);
    return (

            <StyledTable>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove product</th>
                    </tr>
                </thead>
                <tbody>
                    { itemsInCart.map((item) => (
                        <tr key={item.id}>
                            <th>
                                <Link  className="table__product"  to={`/product/${item.id}`}>
                                    <img className="table__image" src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
                                    <span>{item.data.name}</span>                                
                                </Link>
                            </th>
                            <th>{item.data.price}</th>
                            <th className="table__quantity">
                                <Wrapper>
                                    <QuantitySelector quantity={item.quantity} handleControls={()=> {}}/>
                                </Wrapper>
                            </th>
                            <th>{item.subtotal}</th>
                            <th>
                                <button className="table__remove">
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

};
  

export { Table }