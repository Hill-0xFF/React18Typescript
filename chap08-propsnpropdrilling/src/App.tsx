import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './css/style.css';

type TypeItems = {
  id: number;
  checked: boolean;
  item: string;
};

const App = () => {
  const [items, setItems] = useState<TypeItems[]>([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ]);

  const handleCheckbox = (id: number): void => {
    console.log(`Key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('myItems', JSON.stringify(listItems));
  };

  const handleDeleteItem = (id: number): void => {
    const newListItems = items.filter((item) => item.id !== id);
    setItems(newListItems);
    localStorage.setItem('myItems', JSON.stringify(newListItems));
  };

  return (
    <>
      <div>
        <Header />
        <Content
          items={items}
          handleCheckbox={handleCheckbox}
          handleDeleteItem={handleDeleteItem}
        />
        <Footer items={items.length}/>
      </div>
    </>
  );
};

export default App;
