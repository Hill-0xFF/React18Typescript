import {v4 as uuidv4} from 'uuid'
import ContentList from './ContentList';
type ContentProps = {
  data: [],
}

const Content = ({data}: ContentProps) => {
  
  return (
    <section className="content">
      <h2>Content</h2>
      <ul className="content__ul" key={uuidv4()}>
        {
          data.map((content) => (
            <ContentList content={content} key={uuidv4()} ind={uuidv4()} />
          ))
        }
      </ul>
    </section>
  )
}

export default Content