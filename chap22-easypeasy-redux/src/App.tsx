import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Home from './component/Home';
import NewPost from './component/NewPost';
import PostPage from './component/PostPage';
import About from './component/About';
import Missing from './component/Missing';
import UpdatePost from './component/UpdatePost';
import { useStoreActions, Actions } from 'easy-peasy';

import useAxiosFetch from './hooks/useAxiosFetch';


import './css/style.css';
import { IPostModel } from './store';

/*
function MyComponent() {
  const doSomething = useStoreActions(
   (actions: Actions<StoreModel>) => actions.doSomething
  );
}

*/

function App() {
  const setPosts = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setPosts
  )

  const { data, loading, fetchError } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <>
      <Header title="React TS Blog" />
      
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home loading={loading} fetchError={fetchError}/>
          </Route>
          <Route exact path="/post" component={NewPost} />
          <Route path="/edit/:id" component={UpdatePost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="/*" component={Missing} />
        </Switch>
        <Footer />
      
    </>
  );
}

export default App;
