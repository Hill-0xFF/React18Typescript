import ListItem from './ListItem';

import '../css/style.css';

type ContentListProps = {
  content: [];
  ind: string;
};

const ContentList = ({ content, ind }: ContentListProps) => {
  return (
    <tr className='content__tr'>
      <ListItem content={content} key={ind}/>
    </tr>
  );
};

export default ContentList;
