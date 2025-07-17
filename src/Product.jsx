import "./Product.css";

function Product({ title, price, features }) {
    // const list = feature.map((feature) => <li>{feature}</li>);
    let isDiscount = price>30000 ? "Discount 5%" : ""
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h3>price: {price}</h3>
            <h5>{isDiscount}</h5>
        </div>
    );
}

export default Product;