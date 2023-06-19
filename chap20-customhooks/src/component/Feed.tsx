import Post from './Post'
import { HomeProps } from "./Home"

const Feed = ({posts}: HomeProps) => {
  
  return (
    <>
    {
      posts.map((post, index) => (
        <Post ind={post.id} post={post} key={index}/>
      ))
    }
    </>
  )
}

export default Feed