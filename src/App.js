import React from "react"
import { render } from "react-dom"
import Pet from "./Pet"

class App extends React.Component {
  handleTitleClick() {
    alert("You're getting a pet!")
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Diablo" animal="dog" breed="Rotterman" />
        <Pet name="Suzie" animal="cat" breed="Siamese" />
        <Pet name="Squeaker" animal="mouse" breed="Sable" />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
