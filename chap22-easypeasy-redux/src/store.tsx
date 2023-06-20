import {
  createStore,
  action,
  // thunk,
  computed,
  Action,
  // StateMapper,
  // FilterActionTypes,
  Computed,
} from 'easy-peasy';
// import api from './api/api';

/*
posts: string[],
state: StateMapper<FilterActionTypes<{}>>,
payload: any,

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

  search: '',
  setSearch: action((state: StateMapper<FilterActionTypes<NonNullable<unknown>>>, payload) => {
    state.search = payload;
  }),
  // eslint-disable-next-line react-refresh/only-export-components
*/

// interface IStore {
//   state: StateMapper<FilterActionTypes<NonNullable<unknown>>>
// }

interface IPosts {
  id: number,
  title: string,
  body: string,
  datetime: string,
}

interface IPostModel {
  // state: StateMapper<FilterActionTypes<Record<string, never>>>;
  postCount: Computed<IPostModel, number>;
  // getPostById: Computed<IPostModel, (id: string) => undefined, IPosts[] >
  getPostById: Computed<IPostModel, (id: string) => IPosts | undefined >
  search: string;
  searchResults: IPosts[];
  posts: IPosts[];
  postTitle: string;
  postBody: string;
  updateTitle: string;
  updateBody: string;
  setSearch: Action<IPostModel>;
  setSearchResults: Action<IPostModel>;
  setPosts: Action<IPostModel>;
  setPostTitle: Action<IPostModel>;
  setPostBody: Action<IPostModel>;
  setUpdateTitle: Action<IPostModel>;
  setUpdateBody: Action<IPostModel>;
}

export const DataStore = createStore<IPostModel>({
  search: '',
  setSearch: action<IPostModel>((state, payload) => {
    state.search = payload;
  }),

  searchResults: [],
  setSearchResults: action<IPostModel>((state, payload) => {
    state.searchResults = payload;
  }),

  posts: [],
  setPosts: action<IPostModel>((state, payload) => {
    state.posts = payload;
  }),

  postTitle: '',
  setPostTitle: action<IPostModel>((state, payload) => {
    state.postTitle = payload;
  }),

  postBody: '',
  setPostBody: action<IPostModel>((state, payload) => {
    state.postBody = payload;
  }),

  updateTitle: '',
  setUpdateTitle: action<IPostModel>((state, payload) => {
    state.updateTitle = payload;
  }),

  updateBody: '',
  setUpdateBody: action<IPostModel>((state, payload) => {
    state.updateBody = payload;
  }),

  postCount: computed((state) => state.posts.length),
  getPostById: computed((state) => {
    return (id) => state.posts.find(post => (post.id).toString() === id)
  })

});
