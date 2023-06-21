import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { format } from 'date-fns';
import api from '../api/api';

const DataContext: React.Context<any> = createContext({});

export const DataProvider = ({ children }: any) => {

  type TPosts = {
    id: number;
    title: string;
    datetime: string;
    body: string;
  };

  const [posts, setPosts] = useState<TPosts[]>([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<
    {
      id: number;
      title: string;
      datetime: string;
      body: string;
    }[]
  >([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');
  const history = useHistory();
  const { width } = useWindowSize();



  useEffect(() => {
    const filteredPosts =
      posts &&
      posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
    setSearchResults(filteredPosts.reverse());
  }, [posts, search]);

  const handleDeletePost = async (id: number) => {
    try {
      await api.delete(`posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      history.push('/');
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleNewPost = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPost = [...posts, response.data];
      setPosts(allPost);
      setPostTitle('');
      setPostBody('');
      history.push('/');
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleUpdatePost = async (id: number) => {
    // console.log(evt.currentTarget.value)
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatePost = { id, title: updateTitle, datetime, body: updateBody };
    try {
      const response = await api.put(`/posts/${id}`, updatePost);
      setPosts(
        posts.map((post) =>
          post.id === id
            ? { ...response.data, title: `${response.data.title} (edited)` }
            : post
        )
      );
      setUpdateTitle('');
      setUpdateBody('');
      history.push('/');
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider value={{
      width,
      posts,
      search,
      setSearch,
      searchResults,
      setSearchResults,
      postTitle,
      setPostTitle,
      postBody,
      setPostBody,
      updateTitle,
      setUpdateTitle,
      updateBody,
      setUpdateBody,
      // loading,
      // fetchError,
      handleDeletePost,
      handleNewPost,
      handleUpdatePost,
    }}>
      {
        children
      }
      </DataContext.Provider>
  )
};

export default DataContext;