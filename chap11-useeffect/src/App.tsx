import { useState, useEffect, FormEvent } from 'react';
import Header from './components/Header';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';

import './css/style.css';

type TypeItems = {
  id: number;
  checked: boolean;
  item: string;
};

/*
type SubmitItem = {
  newItem: string,
  handleSubmitItem: React.ChangeEventHandler<HTMLInputElement>,
  // setNewItem: React.Dispatch<React.SetStateAction<SubmitItem>>; wrong
  // handleSubmitItem: (str: string) => void; wrong
  // handleSubmitItem: React.MouseEventHandler<HTMLInputElement>,
};
*/

const App = () => {
  // const [items, setItems] = useState<TypeItems[]>([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: 'Item 2',
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: 'Item 3',
  //   },
  // ]);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [items, setItems] = useState<TypeItems[]>(JSON.parse(localStorage.getItem('todolist')!) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState<string>('')

  
  useEffect(() => {
    // console.log('changing/updating items...');
    localStorage.setItem('todolist', JSON.stringify(items));
    
  }, [items])
  
  
  // const setItems = (item: SetStateAction<TypeItems[]>) => {
  //   setItems(item);
  // };

  const addItem = (item: string) => {
    
    if (!items) {
    const id =  1;
    const addedNewItem = { id, checked: false, item };
    const listItem = [addedNewItem];
    // setItems(listItem);
    setItems(listItem);  
    return;
    }
    
    const id: number = items.length ? items[items.length - 1].id + 1 : 1;
    const addedNewItem = { id, checked: false, item };
    const listItem = [...items, addedNewItem];
    // setItems(listItem);
    setItems(listItem);
  };

  const handleCheckbox = (id: number): void => {
    // console.log(`Key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // setItems(listItems);
    setItems(listItems);
  };

  const handleDeleteItem = (id: number): void => {
    const newListItems = items.filter((item) => item.id !== id);
    // setItems(newListItems);
    // localStorage.setItem('todolist', JSON.stringify(newListItems));
    setItems(newListItems);
  };

  const handleSubmitItem = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (!newItem) return;
    // console.log('Submitted... ', newItem);
    addItem(newItem);
    setNewItem('');
  };

  // const addInputRef = useRef()
  return (
    
    <>
    
      <div>
        <Header />
        <SearchItem search={search} setSearch={setSearch}/>
        <AddItem
          // addInputRef={addInputRef}
          item={newItem}
          setNewItem={setNewItem}
          handleSubmitItem={(evt: FormEvent<HTMLFormElement>) => handleSubmitItem(evt)}
        />

        {items && (
          <Content
            items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheckbox={handleCheckbox}
            handleDeleteItem={handleDeleteItem}
          />
        )}
        
        {items ? <Footer items={items.length} /> : <Footer items={0} />}
      </div>
    </>
  );
};

export default App;
