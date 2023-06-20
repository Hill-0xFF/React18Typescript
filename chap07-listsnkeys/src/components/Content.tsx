import { useState } from 'react';
import { FaCheckDouble, FaTrashAlt } from 'react-icons/fa';

type TypeItems = {
  id: number;
  checked: boolean;
  item: string;
};

const Content = () => {
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
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('myItems', JSON.stringify(listItems))
  }

  const handleDeleteItem = (id: number): void => {
    const newListItems = items.filter((item) => item.id !== id )
    setItems(newListItems)
    localStorage.setItem('myItems', JSON.stringify(newListItems))
  }

  return (
    <div>
      <ul>
        {
        items.length ? (
        items.map((elem) => (
          <li className="item" key={elem.id}>
            <input type="checkbox" checked={elem.checked} onChange={() => handleCheckbox(elem.id)}/>
            <label htmlFor="" onDoubleClick={() => handleCheckbox(elem.id)}>{elem.item}</label>
            <FaTrashAlt role="button" tabIndex={0} onClick={() => handleDeleteItem(elem.id)}/>
          </li>
        ))) : (
          <h3>No Items on the list!</h3>
        )}
      </ul>
    </div>
  );
};

export default Content;
