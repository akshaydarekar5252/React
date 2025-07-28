import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <>
      <MsgBox userName="Akshay" textColor="green"/>
      <ProductTab />
    </>
  );
}

export default App;
