import React from "react";
import PropTypes from 'prop-types';
import { StyledCheckbox } from './styled'

function Checkbox({ id, type, onChange, name }){

    return (
        <StyledCheckbox>
            <input type="checkbox"  id={id} name={type} onChange={onChange}/>
            <label htmlFor={id}>{name}</label>
        </StyledCheckbox>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


export { Checkbox }