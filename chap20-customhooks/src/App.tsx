import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import {format} from 'date-fns'
import Header from './component/Header';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Home from './component/Home';
import NewPost from './component/NewPost';
import PostPage from './component/PostPage';
import About from './component/About';
import Missing from './component/Missing';
import UpdatePost from './component/UpdatePost';

import api from './api/api';

import './css/style.css';


type TPosts = {
  id: number,
  title: string,
  datetime: string,
  body: string,
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [posts, setPosts] = useState<TPosts[]>([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{
    id: number;
    title: string;
    datetime: string;
    body: string;
}[]>([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('posts')
         if (response && response.data) setPosts(response.data)
      } catch (err: any) {
        // If not in the 200 response range ... directly from axios docs
        // Error with response from API/backend
        if (err.response instanceof Error) {
          console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        } else {
          // No response at all
          console.log(`Error: ${err.message}`);
          
        }
        
        
      }
    }
    (async () => await fetchPosts())();
  }, [])

  useEffect(() => {
    const filteredPosts = posts && (posts.filter(post => (
      (post.body).toLowerCase()
    ).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase())
    ))
    setSearchResults(filteredPosts.reverse())
    
  }, [posts, search])

  const handleDeletePost = async (id: number) => {
    try {
      await api.delete(`posts/${id}`)
      const postList =  posts.filter((post) => post.id !== id);
      setPosts(postList);
      history.push('/');
    } catch (err: any ) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleNewPost = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title: postTitle, datetime, body: postBody}
    try {
      const response = await api.post('/posts', newPost)
      const allPost = [...posts, response.data]
      setPosts(allPost)
      setPostTitle('')
      setPostBody('')
      history.push('/') 
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
      
    }
  };

  const handleUpdatePost = async (id: number) => {
    // console.log(evt.currentTarget.value)
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatePost = {id, title: updateTitle, datetime, body: updateBody}
    try {
      const response = await api.put(`/posts/${id}`, updatePost)
      setPosts(posts.map((post) => post.id === id ? { ...response.data, title: `${response.data.title} (edited)` } : post))
      setUpdateTitle('')
      setUpdateBody('')
      history.push('/')

    } catch (err: any) {
      console.log(`Error: ${err.message}`);
      
    }
  }

  return (
    <>
      <Header title="React TS Blog" />
      <Nav search={search} setSearch={setSearch} />

      <Switch>
        <Route exact path="/">
          <Home posts={searchResults} />
        </Route>
        <Route exact path="/post">
          <NewPost
            handleNewPost={handleNewPost}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>
        <Route path="/edit/:id">
          <UpdatePost posts={posts} handleUpdatePost={handleUpdatePost} 
          updateBody={updateBody} setUpdateBody={setUpdateBody}
          updateTitle={updateTitle} setUpdateTitle={setUpdateTitle} />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost}/>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/*" component={Missing} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
