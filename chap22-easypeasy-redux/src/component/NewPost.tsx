import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions, Actions, State } from 'easy-peasy';
import { IPostModel } from '../store';

// type NewPostProps = {
//   handleNewPost: (evt: React.FormEvent<HTMLFormElement>) => void,
//   // handleNewPost: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>,
//   postTitle: string,
//   setPostTitle: React.Dispatch<React.SetStateAction<string>>,
//   postBody: string,
//   setPostBody: React.Dispatch<React.SetStateAction<string>>,
// }


const NewPost = () => {
  const history = useHistory()

  const posts = useStoreState(
    (state: State<IPostModel>) => state.posts
  )

  const postTitle = useStoreState(
    (state: State<IPostModel>) => state.postTitle
  )
  const postBody = useStoreState(
    (state: State<IPostModel>) => state.postBody
  )
  const setPostTitle = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setPostTitle
  )
  const setPostBody = useStoreActions(
    (actions: Actions<IPostModel>) => actions.setPostBody
  )

  const savePost = useStoreActions(
    (actions: Actions<IPostModel>) => actions.savePost
  )

  const handleNewPost = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    savePost(newPost)
    history.push('/')
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form action="" onSubmit={(evt) => handleNewPost(evt)} className="newPost__form">
        <label htmlFor="postTitle">Title</label>
        <input type="text"
        id='postTitle'
        value={postTitle}
        onChange={(evt) => setPostTitle(evt.currentTarget.value)} 
        required
        />
        <label htmlFor="postBody">
          Post:
        </label>
        <textarea name="" id="postBody" cols={30} rows={10} required onChange={(evt) => setPostBody(evt.currentTarget.value)} value={postBody}></textarea>
        <button type="submit">Submit Post</button>
      </form>
    </main>
  )
}

export default NewPost