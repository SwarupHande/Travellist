import './App.css';
import Logo from './Components/Logo';
import Header from './Components/Header';
import Service from './Components/Service';
import List from './Components/List';
import { useState } from 'react';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
function App() {
  const [items,setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => ([...items, item]));
  }
  return (
    <div className="app">
      <Logo/>
      <Header  onAddItem={handleAddItems}/>
      <List items={items}/>
      <Service/>
    </div>
  );
}

export default App;
