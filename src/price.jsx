export default function Price({oldPrices, newPrices}) {
    let oldStyles = {
        textDecorationLine : "line-through",
    }
    let newStyles = {
        fontweight : "bold",
    }
    let styles3 = {
        backgroundColor : "#e0c367",
        height :" 30px",
        borderBottomLeftRadius : "15px",
        borderBottomRightRadius : "15px",
    }
    return (
        <div style={styles3}>
            <span style={oldStyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrices}</span>
        </div>
    )
}