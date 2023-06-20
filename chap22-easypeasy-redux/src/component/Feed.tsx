import Post from './Post'

export interface IPosts {
  id: number;
  title: string;
  datetime: string;
  body: string;
}


type FeedProps = {
  searchResults: IPosts[];
};

const Feed = ({searchResults}: FeedProps) => {
  return (
    <>
    {
      searchResults.map((post, index) => (
        <Post ind={post.id} post={post} key={index}/>
      ))
    }
    </>
  )
}

export default Feed