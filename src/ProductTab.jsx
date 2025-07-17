import Product from "./Product.jsx";

function ProductTab() {
  // let option1 = ["hello", "good morning", "hey hii"];
  return (
    <div>
      <Product title="pen" price={30}/>
      <Product title="laptop" price={30000} />
      <Product title="phone" price={80000} />
    </div>
  );
}

export default ProductTab;
