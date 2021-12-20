import { useState } from "react";
import "./App.css";
import ProductCollection from "./Component/ProductCollection";
import SideBar from "./Component/SideBar";

function App() {
  const [products, setProducts] = useState([]);
  const [productsExtra, setProductsExtra] = useState([]);

  return (
    <div className="App bg-neutral-800">
      <div
        className=" 
       fixed left-0 pt-12"
      >
        {products && products.length > 0 ? (
          <SideBar
            products={products}
            setProducts={setProducts}
            productsExtra={productsExtra}
          ></SideBar>
        ) : (
          <h2 className="text-white center"> Loading... </h2>
        )}
      </div>

      <div className="pt-12">
        <ProductCollection
          productsExtra={productsExtra}
          setProductsExtra={setProductsExtra}
          products={products}
          setProducts={setProducts}
        ></ProductCollection>
      </div>
    </div>
  );
}

export default App;
//bg-neutral-900
