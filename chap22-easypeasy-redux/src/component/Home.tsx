import { useContext } from 'react';
import DataContext from '../context/DataContext';
import Feed from './Feed';

// export interface IPosts {
//   id: number;
//   title: string;
//   datetime: string;
//   body: string;
// }

// export type HomeProps = {
//   posts: IPosts[];
//   loading: boolean;
//   fetchError: null;
// };

const Home = () => {
  const { searchResults, loading, fetchError } = useContext(DataContext)
  return (
    <main className="main__home">
      {loading && (
        <p
          style={{
            border: 'solid 3px white',
            color: '#339a11',
            fontSize: '1.5rem',
          }}
        >
          LOADING POSTS...
        </p>
      )}
      {!loading && fetchError && (
        <p
          style={{
            border: 'solid 5px seagreen',
            padding: '1rem',
            color: '#dd1111',
            fontSize: '1.5rem',
          }}
        >
          {fetchError}
        </p>
      )}
      {!loading && !fetchError && searchResults && (
        <>
          {searchResults.length ? (
            <Feed searchResults={searchResults} />
          ) : (
            <p style={{ marginTop: '2rem' }}>No posts to show...</p>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
