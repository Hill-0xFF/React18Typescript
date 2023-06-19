import { useContext } from 'react'
import DataContext from '../context/DataContext'
import {Link} from 'react-router-dom'

// type NavProps = {
//   search: string;
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
//   // React.Dispatch<React.SetStateAction<string>>
  
// };

const Nav = () => {
  // const { search, setSearch } = useContext<Record<string, ProviderProps<{}>>>(DataContext)
  // const { search, setSearch } = useContext<Record<string, ProviderProps<React.Dispatch<React.SetStateAction<string>>>>>(DataContext)
  // const { search, setSearch } = useContext<React.Context<{search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}>>(DataContext)
  const {search, setSearch} = useContext(DataContext)

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
