import {v4 as uuidv4} from 'uuid'
import ContentList from './ContentList';
type ContentProps = {
  data: [],
}

const Content = ({data}: ContentProps) => {
  
  return (
    <section className="content">
      <h2>Content</h2>
      <table className="content__table" key={uuidv4()}>
        <thead>
          <tr><td>::DATA::</td></tr>
        </thead>
        <tbody>
          
        
        {
          data.map((content) => (
            <ContentList content={content} key={uuidv4()} ind={uuidv4()} />
          ))
        }
        </tbody>
      </table>
    </section>
  )
}

export default Content