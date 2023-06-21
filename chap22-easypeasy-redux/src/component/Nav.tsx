import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { useStoreState, useStoreActions, Actions, State } from 'easy-peasy';
import { IPostModel } from '../store';

/* 
based on hovering the state, similar snippet can be given hovering the actions =D
function MyComponent() {
  const todos = useStoreState((state: State<StoreModel>) => state.todos.items);
  return todos.map(todo => <Todo todo={todo} />);
}

*/

const Nav = () => {
  
  const setSearch = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setSearch
  )

  const setSearchResults = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setSearchResults
  )

  const posts = useStoreState( 
    (state: State<IPostModel>) => state.posts
  )

  const search = useStoreState(
    (state: State<IPostModel>) => state.search
  )

  useEffect(() => {
    const filteredPosts =
      posts &&
      posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
    setSearchResults(filteredPosts.reverse());
  }, [posts, search, setSearchResults]);


  return (
    <nav>
      <form
        action=""
        className="searchForm"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <label htmlFor="searchLabel">Search Posts</label>
        <input
          type="text"
          name=""
          id="searchLabel"
          placeholder="Search Posts"
          value={search}
          onChange={(evt) => setSearch(evt.currentTarget.value)}
        />
      </form>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/post'>Post</Link>
          <Link to='/about'>About</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Nav;
