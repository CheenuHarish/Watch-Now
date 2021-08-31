import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Content from './Module/Content'
import Footer from "./Module/Footer"
function App() {
  
  return (
    <div className="container " >
     <h1 className="text-center">Watch Now</h1>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
