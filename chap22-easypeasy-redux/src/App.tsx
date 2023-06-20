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
import { DataProvider } from './context/DataContext';

import './css/style.css';

function App() {
  return (
    <>
      <Header title="React TS Blog" />
      <DataProvider>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route path="/edit/:id" component={UpdatePost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="/*" component={Missing} />
        </Switch>
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
