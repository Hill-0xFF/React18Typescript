import ContentList from './ContentList';

type TypeItems = {
  id: number;
  checked: boolean;
  item: string;
};

type ContentProps = {
  items: TypeItems[];
  handleCheckbox: (id: number) => void;
  handleDeleteItem: (id: number) => void;
};

const Content = ({ items, handleCheckbox, handleDeleteItem }: ContentProps) => {
  return (
    <div>
      <ContentList
        items={items}
        handleCheckbox={handleCheckbox}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

// Content.defaultProps = {
//   items: [],
// }

export default Content;
