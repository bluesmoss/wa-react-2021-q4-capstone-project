import React from "react";
import { Layout } from '../Layout'
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "../../providers/Products"
import { HeaderProvider } from "../../providers/Header"
import { CartProvider } from "../../providers/Cart";


function App() {
  return (
      <Router basename="/wa-react-2021-q4-capstone-project">
        <HeaderProvider>
        <CartProvider>
          <ProductsProvider>
            <Layout/>
          </ProductsProvider>        
        </CartProvider>
        </HeaderProvider>
      </Router>
      
  );
}

export default App;
