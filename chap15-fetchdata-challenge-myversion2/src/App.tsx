import { useEffect,useState } from 'react';
import Form from './component/Form';
import Content from './component/Content';

import './css/style.css';

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState<string | undefined>('users')
  const [data, setData] = useState<[]>([])
  const [fetchError, setFetchError] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=> {
    const fetchReqType = async() => {
      setData([])
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        if (!response.ok) throw Error('Fetch data error!')
        const data = await response.json()
        setData(data)
        
      } catch (err) {
        if (err instanceof Error) setFetchError(err.message)
      } finally {
        setLoading(false)
      }
    }
    (async () => fetchReqType())();
  } ,[reqType])

  return (
    <div>
      <Form reqType={reqType!} setReqType={setReqType}/>
      <main>
        {
          loading && <p>Loading...</p>
        }
        {
          fetchError && <p style={{backgroundColor: 'black', color: 'red'}}>{`Error: ${fetchError}`}</p>
        }
        {
        (!fetchError && !loading && 
            <Content data={data}/>
        )
        }
      </main>
    </div>
  );
};

export default App;
