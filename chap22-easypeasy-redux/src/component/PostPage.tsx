import { useParams, Link, useHistory } from "react-router-dom"
import { useStoreState, State, useStoreActions, Actions } from 'easy-peasy'
import { IPostModel } from "../store";

// import { useContext } from "react";
// import DataContext from "../context/DataContext";

interface IPosts {
  id: number;
  title: string;
  datetime: string;
  body: string;
}

type PostPageProps = {
  searchResults: IPosts[],
  // handleDeletePost: (id: string) => void,
  handleDeletePost: (id: number) => Promise<void>,
  handleUpdatePost: (id: number) => Promise<void>,
}

const PostPage = () => {
  // const {searchResults, handleDeletePost } = useContext<PostPageProps>(DataContext)
  const history = useHistory()
  const searchResults = useStoreState(
    (state: State<IPostModel>) => state.searchResults
  )

  const deletePost = useStoreActions(
    (actions: Actions<IPostModel>) => actions.deletePost
  )

  const handleDeletePost = async (id: number) => {
    deletePost(id)
    history.push('/')
  };
  const id = useParams()
  const post = searchResults.find((post) => (post.id).toString() === Object.values(id).toString())
  
  return (
    <main className="PostPage">
      <article className="post">
        {
          post && 
          <>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <Link to={`/edit/${post.id}`}><button className="updateButton">Update Post</button></Link>
          <button className="deleteButton" onClick={() => handleDeletePost(post.id)}>Delete Post</button>
          </>
        }
        {
          !post &&
          <>
          <h2>Post Not Found</h2>
          <p>Well, that's unexpected!</p>
          <p>
            <Link to='/'>Visit our Homepage ;D</Link>
          </p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage