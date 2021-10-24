import React from "react";
import PropTypes from 'prop-types';
import { StyledText } from './styled'
  
function TextColored(props){
    return (
        <StyledText settings={props}>
            {props.children}
        </StyledText>
    )
}

TextColored.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export { TextColored }