import { useStoreState, State } from 'easy-peasy';
import { IPostModel } from '../store';
import Feed from './Feed';

// export interface IPosts {
//   id: number;
//   title: string;
//   datetime: string;
//   body: string;
// }

export type HomeProps = {
  // posts: IPosts[];
  loading: boolean;
  fetchError: null;
};

const Home = ({loading, fetchError}: HomeProps) => {

  const searchResults = useStoreState(
    (state: State<IPostModel>) => state.searchResults
  )
  
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
