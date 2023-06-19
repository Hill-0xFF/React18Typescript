import { useState, useEffect } from 'react';
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

import './css/style.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 2,
      title: 'My 2nd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 3,
      title: 'My 3rd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 4,
      title: 'My Fourth Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
  ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{
    id: number;
    title: string;
    datetime: string;
    body: string;
}[]>([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const history = useHistory();

  useEffect(() => {
    const filteredPosts = posts.filter(post => (
      (post.body).toLowerCase()
    ).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredPosts.reverse())
  }, [posts, search])

  const handleDeletePost = (id: number) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    history.push('/');
  };

  const handleNewPost = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title: postTitle, datetime, body: postBody}
    const allPost = [...posts, newPost]
    setPosts(allPost)
    setPostTitle('')
    setPostBody('')
    history.push('/')
  };

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

        <Route path="/post/:id">
          <PostPage posts={posts} handleDeletePost={handleDeletePost} />
        </Route>

        <Route path="/about" component={About} />
        <Route path="/*" component={Missing} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
