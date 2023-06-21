import {
  createStore,
  action,
  thunk,
  computed,
  Action,
  // StateMapper,
  // FilterActionTypes,
  Computed,
  Thunk,
} from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import api from './api/api';
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
  getPostById: Computed<IPostModel, (id: string) => IPosts | undefined >;
  savePost: Thunk<IPostModel, any, Promise<void>>;
  deletePost: Thunk<IPostModel, any, Promise<void>>;
  updatePost: Thunk<IPostModel, any, Promise<void>>;

  search: string;
  searchResults: IPosts[];
  posts: IPosts[];
  postTitle: string;
  postBody: string;
  updateTitle: string;
  updateBody: string;
  setSearch: Action<IPostModel>;
  setSearchResults: Action<IPostModel>;
  setPosts: Action<IPostModel, IPosts[]>;
  setPostTitle: Action<IPostModel, string>;
  setPostBody: Action<IPostModel, string>;
  setUpdateTitle: Action<IPostModel, string>;
  setUpdateBody: Action<IPostModel, string>;
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
  setPostTitle: action<IPostModel>((state, payload: string) => {
    state.postTitle = payload;
  }),

  postBody: '',
  setPostBody: action<IPostModel>((state, payload: string) => {
    state.postBody = payload;
  }),

  updateTitle: '',
  setUpdateTitle: action<IPostModel>((state, payload: string) => {
    state.updateTitle = payload;
  }),

  updateBody: '',
  setUpdateBody: action<IPostModel>((state, payload: string) => {
    state.updateBody = payload;
  }),

  postCount: computed((state) => state.posts.length),
  getPostById: computed((state) => {
    return (id) => state.posts.find(post => (post.id).toString() === id)
  }),

  savePost: thunk<IPostModel>(async (actions, newPost, helpers) => {
    const { posts } = helpers.getState();
    const history = useHistory()
    try {
      const response = await api.post('/posts', newPost)
      actions.setPosts([...posts, response.data])
      actions.setPostTitle('')
      actions.setPostBody('')
      history.push('/')
    } catch (err: any ) {
      console.log(`Error: ${err.message}`);
      
    }
  }),

  deletePost: thunk<IPostModel>(async (actions, id, helpers) => {
    const { posts } = helpers.getState()
    
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      actions.setPosts(postList);
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  }),

  updatePost: thunk<IPostModel>(async (actions, updatedPost, helpers) => {
    const { posts } = helpers.getState()
    const  id = updatedPost
    try {
      const response = await api.put(`/posts/${id}`, updatedPost)
      actions.setPosts(posts.map(post => post.id === id ? {...response.data} : post))
      actions.setUpdateTitle('')
      actions.setUpdateBody('')
    } catch(err: any) {
      console.log(err.message);
      
    }
  })

});
