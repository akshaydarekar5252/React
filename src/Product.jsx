import "./Product.css";

function Product({ title, price, features }) {
    let styles = { backgroundColor : price > 30000 ? "red" : "" };
    return (
        <div className="Product" >
            <h3>{title}</h3>
            <h3>price: {price}</h3>
            {price>30000 && <p style={styles}> Discount of 5% </p>}
        </div>
    );
}

export default Product;