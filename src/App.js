import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    (async function () {
      try {
        // console.log("cDM start");
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        // console.log("before setState");
        this.setState({ monsters: data });
        // console.log("cDM end");
      } catch (err) {
        console.log(err);
      }
    }.call(this));
  }

  render() {
    // console.log("on render start");
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
