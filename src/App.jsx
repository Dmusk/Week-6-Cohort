import { useState } from "react";


function App() {

  const [title, setTitle] = useState("My name is Aadarsh");

  function onClickHandler() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={onClickHandler}>Change title</button> <br />
      <Header title={title}></Header>
      <br />
      <Header title="I am from Dondaicha"></Header>
    </div>
  )
}

function Header({ title }) {
  return <>
    {title}
  </>
}

export default App
