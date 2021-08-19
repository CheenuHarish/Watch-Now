import React,{useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Search from './Module/search'
import Content from './Module/Content'
import Footer from "./Module/Footer"
function App() {
  const[search,setSearch] = useState("")
  
  return (
    <div className="container " >
     <h1 className="text-center">Watch Now</h1>
     <Search val={setSearch} /><br/>
     <Content val2={search}/>
     <Footer/>
    </div>
  );
}

export default App;
