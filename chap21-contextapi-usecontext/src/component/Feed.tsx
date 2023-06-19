import Post from './Post'

export interface IPosts {
  id: number;
  title: string;
  datetime: string;
  body: string;
}


type FeedProps = {
  posts: IPosts[];
};

const Feed = ({posts}: FeedProps) => {
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