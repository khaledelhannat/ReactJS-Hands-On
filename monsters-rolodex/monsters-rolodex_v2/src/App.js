import { useState, useEffect } from 'react';


import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [currentMenu, setCurrentMenu] = useState([]);

  // console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users)
        setCurrentMenu(users);
        return users
      },
      )
  }, [])

  const onSearch = (event) => {
    let newArr = monsters.filter((monster) => {
      const lowerCase = monster.name.toLowerCase();
      let value = event.target.value.toLowerCase();
      return lowerCase.includes(value);
    });
    setCurrentMenu(newArr);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Relodex</h1>

      <SearchBox onChangeHandler={onSearch} placeholder='search monsters' className='search-box' />

      <CardList monstersList={currentMenu} />

    </div>
  );
}

export default App;