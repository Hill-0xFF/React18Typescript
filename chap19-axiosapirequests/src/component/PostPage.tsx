import { useParams, Link } from "react-router-dom"

interface IPosts {
  id: number;
  title: string;
  datetime: string;
  body: string;
}

type PostPageProps = {
  posts: IPosts[],
  // handleDeletePost: (id: string) => void,
  handleDeletePost: (id: number) => Promise<void>,
  handleUpdatePost: (id: number) => Promise<void>,
}

const PostPage = ({posts, handleDeletePost, handleUpdatePost}: PostPageProps) => {
  
  const id = useParams()
  // const tst = posts.find((post) => (post.id).toString() === Object.values(id).toString())
  // console.log(tst);
  const post = posts.find((post) => (post.id).toString() === Object.values(id).toString())
  
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