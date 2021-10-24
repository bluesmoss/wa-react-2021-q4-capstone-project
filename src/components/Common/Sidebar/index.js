import React from "react";
import PropTypes from 'prop-types';
import { StyledSidebar } from "./styled"

function Sidebar(props){

    return (    
        <StyledSidebar className={props.className ? props.className : ''} >
            {props.children}
        </StyledSidebar>
    )
}

Sidebar.propTypes = {
    children: PropTypes.array,
};
  

export { Sidebar }