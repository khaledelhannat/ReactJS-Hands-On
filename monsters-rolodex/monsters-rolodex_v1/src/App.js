import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      currentMenu: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => {
        return {
          monsters: users,
          currentMenu: users,
        }
      },
      ))
  }

  onSearch = (event) => {
    let newArr = this.state.monsters.filter((monster) => {
      const lowerCase = monster.name.toLowerCase();
      let value = event.target.value.toLowerCase();
      return lowerCase.includes(value);
    });
    this.setState(() => { return { currentMenu: newArr } });
  }

  render() {

    const { currentMenu } = this.state;
    const { onSearch } = this;

    return (
      <div className="App">
        <h1 className="app-title">Monsters Relodex</h1>

        <SearchBox onChangeHandler={onSearch} placeholder='search monsters' className='search-box' />

        <CardList monstersList={currentMenu} />

      </div>
    );
  }
}

export default App;