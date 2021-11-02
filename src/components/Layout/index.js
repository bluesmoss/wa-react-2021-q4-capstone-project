import React, { Fragment } from "react";
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { Modal, Search } from '../../components/Common'
import { useHeaderContext } from "../../providers/Header";



function Layout(){
    const { openModal } = useHeaderContext()
    
    return (
        <Fragment>
             <Header/>
             <Main/>
             <Footer/>
            { openModal && (
            <Modal>
                <Search/>
            </Modal>
            )}                        
        </Fragment>
    )
}
export { Layout }