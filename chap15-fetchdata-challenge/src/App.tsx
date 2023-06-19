import { useEffect,useState } from 'react';
import Form from './component/Form';
import Content from './component/Content';

// import { TypeComments, TypePosts, TypeUsers } from './types/FetchTypes';

import './css/style.css';

// type TypeUsers = {
//   id: string,
//   name: string,
//   email: string,
//   address: object,
//   phone: string,
//   website: string,
//   company: object
// }

// type TypePosts = {
//   userId: number,
//   id: number,
//   title: string,
//   body: string,
// }

// type TypeComments = {
//   postId: number,
//   name: string,
//   email: string,
//   body: string
// }

const App = () => {
  // https://jsonplaceholder.typicode.com/users
  // https://jsonplaceholder.typicode.com/posts
  // https://jsonplaceholder.typicode.com/comments

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       // AS SUGGESTED IN THE WEBSITE
  //       // fetch('https://jsonplaceholder.typicode.com/users/1')
  //       // .then(response => response.json())
  //       // .then(json => console.log(json))
  //       const response = await fetch(`${API_URL}users/`)
  //       if (!response.ok) throw Error('Users fetch response error!')
  //       const listUsers = await response.json()
  //       setUsers(listUsers)
  //       setFetchError(null)
  
  //     } catch (err) {
  //       if (err instanceof Error) setFetchError(err.message)
        
  //     } finally {
  //       setLoading(false)
  //     }
  //   } // end fetchUsers()
  //   (async () => fetchUsers())();

  //   const fetchComments = async () => {
  //     try {
  //       const response =  await fetch(`${API_URL}comments/`)
  //       if (!response.ok) throw Error('Comments fetch response error!')
  //       const listComments = await response.json()
  //       setComments(listComments)
  //       setFetchError(null)
  
  //     } catch (err) {
  //       if (err instanceof Error) setFetchError(err.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   (async () => fetchComments())();
  
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(`${API_URL}posts/`)
  //       if (!response.ok) throw Error ('Posts fetch response error!')
  //       const listPosts = await response.json()
  //       setPosts(listPosts)
  //       setFetchError(null)
  //     } catch (err) {
  //       if (err instanceof Error) setFetchError(err.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   (async () => fetchPosts())();
  // } ,[])

  
    // const fetchUsers = async (): Promise<void> => {
    //   try {
    //     // AS SUGGESTED IN THE WEBSITE
    //     // fetch('https://jsonplaceholder.typicode.com/users/1')
    //     // .then(response => response.json())
    //     // .then(json => console.log(json))
    //     const response = await fetch(`${API_URL}users/`)
    //     if (!response.ok) throw Error('Users fetch response error!')
    //     const listUsers = await response.json()
    //     setUsers(listUsers)
    //     setFetchError(null)
  
    //   } catch (err) {
    //     if (err instanceof Error) setFetchError(err.message)
        
    //   } finally {
    //     setLoading(false)
    //   }
    // } 
    // // (async () => fetchUsers())();

    // const fetchComments = async (): Promise<void> => {
    //   try {
    //     const response =  await fetch(`${API_URL}comments/`)
    //     if (!response.ok) throw Error('Comments fetch response error!')
    //     const listComments = await response.json()
    //     setComments(listComments)
    //     setFetchError(null)
  
    //   } catch (err) {
    //     if (err instanceof Error) setFetchError(err.message)
    //   } finally {
    //     setLoading(false)
    //   }
    // }
    // (async () => fetchComments())();
  
    // const fetchPosts = async (): Promise<void> => {
    //   try {
    //     const response = await fetch(`${API_URL}posts/`)
    //     if (!response.ok) throw Error ('Posts fetch response error!')
    //     const listPosts = await response.json()
    //     setPosts(listPosts)
    //     setFetchError(null)
    //   } catch (err) {
    //     if (err instanceof Error) setFetchError(err.message)
    //   } finally {
    //     setLoading(false)
    //   }
    // }
    // (async () => fetchPosts())();

    const API_URL = 'https://jsonplaceholder.typicode.com/'
    const [reqType, setReqType] = useState<string | undefined>('users')
    const [data, setData] = useState<[]>([])
    const [fetchError, setFetchError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(true)
  
    useEffect(()=> {
      const fetchReqType = async() => {
        console.log('fetching...');
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
