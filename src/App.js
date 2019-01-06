import React from 'react'
import {
  render
} from 'react-dom'
import Pet from './Pet'

class App extends React.Component {
  handleTitleClick() {
    alert("You're getting a pet!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1", {
          onClick: this.handleTitleClick
        },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Diablo",
        animal: "Dog",
        breed: "Rotterman"
      }),
      React.createElement(Pet, {
        name: "Susie",
        animal: "Cat",
        breed: "Siamese"
      }),
      React.createElement(Pet, {
        name: "Squeaks",
        animal: "Mouse",
        breed: "Spotted"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));