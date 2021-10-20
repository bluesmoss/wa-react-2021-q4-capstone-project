import React from "react";
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'


function Layout(){

    return (
        <React.Fragment>
             <Header/>
             <Main/>
             <Footer/>
        </React.Fragment>
    )
}
export { Layout }