import Post from './Post'
import { HomeProps } from "./Home"

const Feed = ({posts}: HomeProps) => {
  console.log(Object.entries(posts));
  
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