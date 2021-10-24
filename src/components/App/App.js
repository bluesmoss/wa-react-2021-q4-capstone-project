import React from "react";
import { Layout } from '../Layout'
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "../../contexts/Products"

function App() {
  return (
      <Router>
        <ProductsProvider>
          <Layout/>
        </ProductsProvider>
      </Router>
      
  );
}

export default App;
