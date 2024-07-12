import { useState } from "react";

var i = 3;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    Title: "Gym",
    Desc: "6-7",
    Completed: "false",
  },
  {
    id: 2,
    Title: "Study",
    Desc: "9-12",
    Completed: "false",
  },
  {
    id: 3,
    Title: "Sleep",
    Desc: "12-7",
    Completed: "false",
  }])

  function addTodo() {
    i++;
    setTodos([...todos,        //... -> spread operator;
    {
      id: i,
      Title: "BreakFast",
      Desc: "8-9",
      Completed: "false",
    }]
    )
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.Title} desc={todo.Desc} stat={todo.Completed} />)}
    </div>
  )
}

function Todo({ title, desc, stat }) {
  return <>
    <div>
      <h3>{title}</h3>
      <h3>{desc}</h3>
      <h3>{stat}</h3>
      <hr />
    </div>
  </>
}

export default App
