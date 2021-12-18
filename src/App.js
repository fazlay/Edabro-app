import "./App.css";
import ProductCollection from "./Component/ProductCollection";
import SideBar from "./Component/SideBar";


function App() {
  return (
    <div className="App bg-neutral-800">

   
      <div
        className=" 
       fixed left-0 pt-12"
      >
        <SideBar></SideBar>
      </div>

      <div className="pt-12">
        <ProductCollection></ProductCollection>
      </div>
    </div>
  );
}

export default App;
//bg-neutral-900
