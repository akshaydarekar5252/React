export default function Price({oldPrices, newPrices}) {
    let oldStyles = {
        textDecorationLine : "line-through",
    }
    let newStyles = {
        fontweight : "bold",
    }
    return (
        <div>
            <span style={oldStyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrices}</span>
        </div>
    )
}