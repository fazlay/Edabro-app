import { useState } from "react";
import "./App.css";
import ProductCollection from "./Component/ProductCollection";
import SideBar from "./Component/SideBar";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="App bg-neutral-800">
      <div
        className=" 
       fixed left-0 pt-12"
      >
        {products && (
          <SideBar products={products} setProducts={setProducts}></SideBar>
        )}
      </div>

      <div className="pt-12">
        <ProductCollection
          products={products}
          setProducts={setProducts}
        ></ProductCollection>
      </div>
    </div>
  );
}

export default App;
//bg-neutral-900
