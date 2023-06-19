import {v4 as uuidv4} from 'uuid'
import ContentLineItem from './ContentLineItem';

type TypeItems = {
  id: number;
  checked: boolean;
  item: string;
};

type ContentListProps = {
  items: TypeItems[];
  handleCheckbox: (id: number) => void;
  handleDeleteItem: (id: number) => void;
};

const ContentList = ({
  items,
  handleCheckbox,
  handleDeleteItem,
}: ContentListProps) => {
  return (
    <ul>
      {items.length ? (
        items.map((elem) => (
          <ContentLineItem
            elem={elem}
            handleCheckbox={handleCheckbox}
            handleDeleteItem={handleDeleteItem}
            key={uuidv4()}
          />
        ))
      ) : (
        <h3>No Items on the list!</h3>
      )}
    </ul>
  );
};
// PS: IN CASE YOU SEE AN ERROR LIKE : 'items in not
// 'Parameter 'elem' implicitly has an 'any' type',
// 'Binding element 'items' implicitly has an 'any' type',
// 'Binding element 'handleDeleteItem' implicitly has an 'any' type.',
// 'Binding element 'handleCheckbox' implicitly has an 'any' type.',
// 'Type '{ items: TypeItems[]; handleCheckbox: (id: number) => void; handleDeleteItem: (id: number) => void; }' is not assignable to type 'IntrinsicAttributes'.
// Property 'items' does not exist on type 'IntrinsicAttributes'.'
//
// It happens
//
//
//
// ContentList.defaultProps = {
//   items: [],
// }

export default ContentList;
