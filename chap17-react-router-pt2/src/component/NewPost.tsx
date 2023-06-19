import React from "react"

type NewPostProps = {
  handleNewPost: (evt: React.FormEvent<HTMLFormElement>) => void,
  postTitle: string,
  setPostTitle: React.Dispatch<React.SetStateAction<string>>,
  postBody: string,
  setPostBody: React.Dispatch<React.SetStateAction<string>>,
}


const NewPost = ({handleNewPost,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,}:NewPostProps) => {
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