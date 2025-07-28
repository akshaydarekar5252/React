import Product from "./Product.jsx";

function ProductTab() {
  
  return (
    <div>
      <Product title="pen" price={30}/>
      <Product title="laptop" price={30000} />
      <Product title="phone" price={80000} />
    </div>
  );
}

export default ProductTab;
