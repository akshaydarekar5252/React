function handelFormSbmit (event){
    event.preventDefault();
    console.log("form was submitted");
} 



export default function Form () {
    return (
        <form>
            <input placeholder="type something here"/>
            <button onClick={handelFormSbmit}>submit</button>
        </form>
    )
}