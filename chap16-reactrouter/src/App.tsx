import { Route, Switch } from 'react-router-dom';
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
  return (
    <>
      <Header />
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostPage />
        </Route>

        <Route path="/about" component={About} />
        <Route path="/*" component={Missing} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
