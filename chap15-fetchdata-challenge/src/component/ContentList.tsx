import ListItem from './ListItem'

import '../css/style.css'

// type ContenListProps = {
//   user: {
//     id: string,
//   name: string,
//   email: string,
//   address: object,
//   phone: string,
//   website: string,
//   company: object
//   }
// }

type ContentListProps = {
  content: [],
  ind: string,
}


// const ContentList = (content: ContenListProps| ReactElement<ContenListProps, string | JSXElementConstructor<ContenListProps>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
const ContentList = ({content, ind}: ContentListProps) => {
  return (
    <ListItem content={content} key={ind} />
  )
}

export default ContentList