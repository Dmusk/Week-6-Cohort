import { useState } from "react";


function App() {

  return (
    <div>
      <Firsthandler></Firsthandler>
      <Header title="I am from Dondaicha"></Header>
    </div>
  )
}

function Firsthandler() {

  const [first, setFirst] = useState("My name is Aadarsh");

  function onClickHandler() {
    setFirst("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={onClickHandler}>Change title</button> <br />
      <Header title={first}></Header>
      <br />
    </div>
  )
}

function Header({ title }) {
  return <>
    {title}
  </>
}

export default App
