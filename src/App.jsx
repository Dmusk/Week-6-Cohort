import React from "react"

function App() {

  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<ImageComponent />} />
    </div>
  )
}


function TextComponent() {
  return <div>
    Hi there
  </div>
}

function ImageComponent() {
  return <div>
    My Photo
  </div>
}


function CardWrapper({ innerComponent }) {

  return <div style={{
    border: "2px solid black", padding: 200
  }}>
    {innerComponent}
  </div>
}





export default App
