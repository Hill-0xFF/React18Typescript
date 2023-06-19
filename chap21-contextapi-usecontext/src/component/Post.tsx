import { Link } from 'react-router-dom'

interface IPosts {
  id: number;
  title: string;
  datetime: string;
  body: string;
}

type PostProps = {
  ind: number,
  post: IPosts,
}

const Post = ({ind, post}: PostProps) => {
  return (
    <article className='post' key={ind}>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
      </Link>
      <p className="postBody">
        {
          (post.body).length < 25 ? post.body : `${(post.body).slice(0,25)}...`
        }
      </p>
    </article>
  )
}

export default Post