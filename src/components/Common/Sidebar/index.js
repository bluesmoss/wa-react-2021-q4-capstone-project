import React from "react";
import PropTypes from 'prop-types';
import { StyledSidebar } from "./styled"

function Sidebar(props){

    return (    
        <StyledSidebar>
            {props.children}
        </StyledSidebar>
    )
}

Sidebar.propTypes = {
    children: PropTypes.array,
};
  

export { Sidebar }