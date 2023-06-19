import { useEffect } from "react"
import { useParams, Link } from 'react-router-dom'

interface IUpdatePost {
  id: number,
  title: string,
  datetime: string,
  body: string,
}

type UpdatePostProps = {
  posts: IUpdatePost[],
  updateBody: string,
  setUpdateBody: React.Dispatch<React.SetStateAction<string>>,
  updateTitle: string,
  setUpdateTitle: React.Dispatch<React.SetStateAction<string>>,
  handleUpdatePost: (id: number) => Promise<void>,
}

const UpdatePost = ({ posts, handleUpdatePost, updateBody, setUpdateBody, updateTitle, setUpdateTitle }: UpdatePostProps) => {
  const id = useParams();
  const currentPost = posts.find(post => (post.id).toString() === Object.values(id).toString())
  
  useEffect(() => {
    if(currentPost) {
      setUpdateTitle(currentPost.title)
      setUpdateBody(currentPost.body)
    }
  }, [currentPost, setUpdateTitle, setUpdateBody])

  return (
    <main className="NewPost">
      {updateTitle &&
        <>
        <h2>Edit Post</h2>
        <form action="" onSubmit={(evt) => evt.preventDefault()} className="newPost__form">
          <label htmlFor="postTitle">Title</label>
          <input type="text"
          id='postTitle'
          value={updateTitle}
          onChange={(evt) => setUpdateTitle(evt.currentTarget.value)} 
          required
          />
          <label htmlFor="postBody">
            Post:
          </label>
          <textarea name="" id="postBody" cols={30} rows={10} required onChange={(evt) => setUpdateBody(evt.currentTarget.value)} value={updateBody}></textarea>
          <button type="submit" onClick={() => handleUpdatePost(Number(currentPost?.id))}>Submit Post</button>
        </form>
        </>
        }
        {
          !updateTitle &&
          <>
          <h2>Post Not Found</h2>
          <p>Well, that's unexpected!</p>
          <p>
            <Link to='/'>Visit our Homepage ;D</Link>
          </p>
          </>
        }
    </main>
  )
}

export default UpdatePost