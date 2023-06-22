import { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useStoreActions, Actions, useStoreState, State } from 'easy-peasy'
import {IPostModel} from '../store'
import { format } from 'date-fns/esm'

interface IUpdatePost {
  id: number,
  title: string,
  datetime: string,
  body: string,
}

const UpdatePost = () => {
  const history = useHistory()
  const id = useParams();
  
  const updateBody = useStoreState(
    (state: State<IPostModel>) => state.updateBody
  )

  const setUpdateBody = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setUpdateBody
  )

  const updateTitle = useStoreState(
    (state: State<IPostModel>) => state.updateTitle
  )

  const setUpdateTitle = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setUpdateTitle
  )

  const updatePost = useStoreActions(
    (actions: Actions<IPostModel>) => actions.updatePost
  )

  const getPostById = useStoreState(
    (state: State<IPostModel>) => state.getPostById
  )

  // const currentPost = getPostById(Object.values(id).toString())
  const idval = Object.values(id).toString()
  console.log('idval: ', typeof idval);
  
  const currentPost = getPostById(Object.values(id).toString())
  console.log('CurrentPost: ', currentPost);
  
  
  useEffect(() => {
    if(currentPost) {
      setUpdateTitle(currentPost.title)
      setUpdateBody(currentPost.body)
    }
  }, [currentPost, setUpdateTitle, setUpdateBody])

  const handleUpdatePost = (id: number) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost: IUpdatePost = { id, title: updateTitle, body: updateBody, datetime}
    updatePost(updatedPost)
    // history.push(`/post/${id}`)
    history.push(`/`)
  }

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
          <button type="button" onClick={() => handleUpdatePost(currentPost?.id)}>Submit Post</button>
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