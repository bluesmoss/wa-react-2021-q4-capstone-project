import React from "react";
import { StyledForm } from './styled'
import { Wrapper } from "../../Common";

function Form(){

    return (
        <StyledForm>
            <Wrapper className="checkout__input">
                <label>Name</label>
                <input type="text"/>
            </Wrapper>
            <Wrapper className="checkout__input">
                <label>Email</label>
                <input type="text"/>
            </Wrapper>
            <Wrapper className="checkout__input">
                <label>Zip</label>
                <input type="text"/>
            </Wrapper>
            <Wrapper className="checkout__input">
                <label>Notes</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
               
                </textarea>
            </Wrapper>                                    
            
        </StyledForm>
    )
}

export { Form }