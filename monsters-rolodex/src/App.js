import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      currentMenu: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
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

  render() {
    console.log('render');
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            let newArr = this.state.monsters.filter((monster) => {
              const lowerCase = monster.name.toLowerCase();
              let value = event.target.value.toLowerCase();
              return lowerCase.includes(value);
            });
            this.setState(() => { return { currentMenu: newArr } });
          }}
        />
        {this.state.currentMenu.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>;
        })}
      </div>
    );
  }
}

export default App;