import React from "react";
import PropTypes from 'prop-types';
import { StyledCheckbox } from './styled'

function Checkbox({ id, type, onChange, name, defaultFilters }){

    const checked = JSON.stringify(defaultFilters) === JSON.stringify(type)
    return (
        <StyledCheckbox>
            <input type="checkbox"  id={id} name={type} onChange={onChange} defaultChecked={checked}/>
            <label htmlFor={id}>{name}</label>
        </StyledCheckbox>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.array.isRequired,
    onChange:  PropTypes.func.isRequired,
    defaultFilters:  PropTypes.array.isRequired,    
};


export { Checkbox }