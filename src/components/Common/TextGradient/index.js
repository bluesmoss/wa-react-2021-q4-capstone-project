import React from "react";
import PropTypes from 'prop-types';
import { StyledTextGradient } from "./styled"
  
function TextGradient(props){
    return (
        <StyledTextGradient settings={props} className={props.className ? props.className : ''}/>
    )
}

TextGradient.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
};
  
export { TextGradient }