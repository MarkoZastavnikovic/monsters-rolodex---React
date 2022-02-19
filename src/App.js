import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
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

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // console.log("on render start");
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange.bind(this)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// handleChange(e) {
//   // console.log("onChange setStart start");
//   this.setState(
//     { searchField: e.target.value }

//     // , () =>
//     // console.log(this.state)
//   );
//   // console.log("onChange setStart after");
// }
