import React from "react";
import { Layout } from '../Layout'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router basename="/wa-react-2021-q4-capstone-project">
        <Layout/>
      </Router>
      
  );
}

export default App;
