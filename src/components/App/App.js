import React from "react";
import { Layout } from '../Layout'
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "../../contexts/Products"

function App() {
  return (
      <Router basename="/wa-react-2021-q4-capstone-project">
        <ProductsProvider>
          <Layout/>
        </ProductsProvider>
      </Router>
      
  );
}

export default App;
