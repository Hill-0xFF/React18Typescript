// import { TypeComments } from "../types/FetchTypes"

type CommentsProps = {
  fetchComments: () => void,
}

const Comments = ({fetchComments}: CommentsProps) => {
  return (
    <button type='button' onClick={() => fetchComments()}>Comments</button>
  )
}

export default Comments