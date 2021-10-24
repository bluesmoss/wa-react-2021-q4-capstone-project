import React from "react";
import PropTypes from 'prop-types';
import { StyledCheckbox } from './styled'

function Checkbox(props){

    return (
        <StyledCheckbox>
            <input type="checkbox"  id={props.id}/>
            <label htmlFor={props.id}>{props.name}</label>
        </StyledCheckbox>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


export { Checkbox }