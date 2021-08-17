import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Search from './Module/search'

import Content from './Module/Content'

function App() {
  return (
    <div className="container " >
     <h1 className="text-center">Watch Now</h1>
     <Search></Search><br/>
     
     <Content></Content>
    </div>
  );
}

export default App;
