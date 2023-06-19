import { v4 as uuidv4 } from 'uuid';

import '../css/style.css';

type ListItemProps = {
  content: [];
};

const ListItem = ({ content }: ListItemProps) => {
  const arrayList = Object.entries(content);

  return (
    <>
      {/* {JSON.stringify(content)} */}
      {arrayList.map((content) => (
        <td className='content__td' key={uuidv4()}>
          {/* {JSON.stringify(content[1]).replace('"', "")} */}
          {JSON.stringify(content[1]).replace('"', " ").replace('"', " ")}
        </td>
      )
      )}
    </>
  );
};

export default ListItem;
