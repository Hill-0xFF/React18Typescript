// import { TypePosts } from "../types/FetchTypes"

type PostsProps = {
  fetchPosts: () => void,
}
const Posts = ({fetchPosts}: PostsProps) => {
  return (
    <button type='button' onClick={()=> fetchPosts()}>Posts</button>
  )
}

export default Posts