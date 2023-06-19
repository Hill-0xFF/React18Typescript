import Feed from './Feed'

export interface IPosts {
  id: number;
  title: string;
  datetime: string;
  body: string;
}

export type HomeProps = {
  posts: IPosts[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <main className="main__home">
      <>
          {
            posts.length ? (
              <Feed posts={posts}/>
            ) : (
              <p style={{marginTop: '2rem'}}>
                No posts to show...
              </p>
            )
          }
      </>
    </main>
  );
};

export default Home;
