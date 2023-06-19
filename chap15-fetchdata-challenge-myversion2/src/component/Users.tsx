// import { TypeUsers } from "../types/FetchTypes"

type UserProps = {
  fetchUsers: () => void,
}

const Users = ({fetchUsers}: UserProps) => {
  return (
    <button type="button" onClick={() => fetchUsers()}>Users</button>
  )
}

export default Users