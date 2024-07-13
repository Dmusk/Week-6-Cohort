import React from "react"

function App() {

  return <div>
    <Card>
      Hello
    </Card>
    <Card>
      <div>
        I am Second Compomet
      </div>
    </Card>
  </div>
}


function Card({ children }) {

  return <div style={{
    border: "2px solid black", padding: 200
  }}>
    {children}
  </div>
}

export default App
