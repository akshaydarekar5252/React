import "./Product.css";
import Price from "./price";

function Product({ title, idx }) {
  const oldPrices = [500, 1200, 750, 300, 950];
  const newPrices = [450, 1000, 700, 250, 900];
  const descriptions = [
    "Ergonomic wireless mouse.",
    "Stylus for iPad drawing.",
    "RGB gaming keyboard combo.",
    "Basic USB mic for recording.",
  ];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{descriptions[idx]}</p>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}

export default Product;
