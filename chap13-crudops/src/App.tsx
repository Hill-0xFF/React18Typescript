import { useState, useEffect, FormEvent } from 'react';
import Header from './components/Header';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';

import api_request from './api/ApiRequest';

import './css/style.css';

type TypeItems = {
  id: number;
  checked: boolean;
  item: string;
};


const App = () => {
  const API_URL = 'http://localhost:3004/items'
  const [fetchError, setFetchError] = useState<null | string>(null)
  const [loading, setLoading] = useState(true)
  // const [isPending, startTransition] = useTransition()
  const [items, setItems] = useState<TypeItems[]>([])
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState<string>('')

  
  useEffect(() => {
    // console.log('changing/updating items...');
    // let flagRCE = false;
    
    const fetchItems = async (): Promise<void> => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not received expected data!')
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
        
        // if(isPending) {
        //   startTransition(() => {
        //     setItems(listItems)
        //   })
        // }
        // use of useTransition hook made the render ok but data is not received yet...

      } catch (err) {
        if (err instanceof Error) setFetchError(err.message)
      } finally {
        setLoading(false)
      }
    }
    // (async () => await fetchItems())();
    setTimeout(() => fetchItems(), 2000)
}, [])
  
  const addItem = async (item: string) => {
    
    if (!items) {
    const id =  1;
    const addedNewItem = { id, checked: false, item };
    const listItem = [addedNewItem];
    setItems(listItem);  

    return;
    }
    
    const id: number = items.length ? items[items.length - 1].id + 1 : 1;
    const addedNewItem = { id, checked: false, item };
    const listItem = [...items, addedNewItem];
    setItems(listItem);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedNewItem)
    }
    const result = await api_request(API_URL, postOptions)
    if (result) setFetchError(result)
  };

  const handleCheckbox = async (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const getItemUpdated = listItems.filter((item) => item.id === id)
    const patchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: getItemUpdated[0].checked})
    }
    const updateUrl = `${API_URL}/${id}`
    const result = await api_request(updateUrl, patchOptions)
    if (result) setFetchError(result)
  };

  const handleDeleteItem = async (id: number) => {
    const newListItems = items.filter((item) => item.id !== id);
    // setItems(newListItems);
    // localStorage.setItem('todolist', JSON.stringify(newListItems));
    setItems(newListItems);

    const deleteOptions = {method: 'DELETE'}
    const deleteUrl = `${API_URL}/${id}`
    const result = await api_request(deleteUrl, deleteOptions)
    if (result) setFetchError(result)
  };

  const handleSubmitItem = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

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
        <main>
          {
            loading && <p>Loading Data...</p>
          }
          {
            fetchError && <p style={{backgroundColor: 'black', color: 'red'}}>{`Error: ${fetchError}`}</p>
          }
        
          {
          (!fetchError && !loading &&
          <Content
              items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheckbox={handleCheckbox}
              handleDeleteItem={handleDeleteItem}
          />)
          }
        </main>
        
        {items ? <Footer items={items.length} /> : <Footer items={0} />}
      </div>
    </>
  );
};

export default App;
