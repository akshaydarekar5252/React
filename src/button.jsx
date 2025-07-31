function PrintHello() {
    console.log("Hello World ! this is the button for the my first react project")
}

function PrintBye () {
    console.log("Bye ...")
}


export default function Button () {
    return (
        <div>
            <button onClick={PrintHello}>Click Me !</button>
            <p onClick={PrintBye}>this is the para for the react event listeners </p>
        </div>
    )
}