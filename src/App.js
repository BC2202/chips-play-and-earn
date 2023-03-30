import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nevbar from "./Component/Nevbar";
import'./App.css';
import About from "./Component/About";
import Feature from "./Component/Feature";
import Tokenomics from "./Component/Tokenomics";
import Footer from "./Component/Footer";
import Roadmap from "./Component/Roadmap";
import Problem from "./Component/Problem";
const App = () => {
  return (
    <div className='nevbar-img'>
      <Nevbar />
      <About/>
      <Problem/>
      <Feature/>
      <Roadmap/>
      <Tokenomics/>
      <Footer/>
    </div>
  );
};

export default App;
