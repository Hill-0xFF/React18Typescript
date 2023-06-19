import {v4 as uuidv4} from 'uuid'
type ListItemProps = {
  content: [],
}

import '../css/style.css'
const ListItem = ({content}: ListItemProps) => {
  return (
    <li className="content__li" key={uuidv4()}>
      {JSON.stringify(content)}
    </li>
  )
}

export default ListItem