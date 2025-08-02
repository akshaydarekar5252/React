function PrintHello() {
    console.log("Hello World ! this is the button for the my first react project")
}

function PrintBye () {
    console.log("Bye ...")
}

function handleDblClick () {
    console.log("double clicked me ")
}

export default function Button () {
    return (
        <div>
            <button onClick={PrintHello}>Click Me !</button>
            <p onMouseOver={PrintBye}>this is the para for the react event listeners </p>
            <button onDoubleClick={handleDblClick}>Dbl click me </button>
        </div>
    )
}