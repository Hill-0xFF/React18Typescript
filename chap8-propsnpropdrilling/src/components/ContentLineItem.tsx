import { FaTrashAlt } from 'react-icons/fa';

type TypeItem = {
  id: number;
  checked: boolean;
  item: string;
};

type ContentLineItem = {
  elem: TypeItem;
  handleCheckbox: (id: number) => void;
  handleDeleteItem: (id: number) => void;
};

const ContentLineItem = ({elem, handleCheckbox, handleDeleteItem}: ContentLineItem) => {
  return (
    <li className="item" key={elem.id}>
      <input
        type="checkbox"
        checked={elem.checked}
        onChange={() => handleCheckbox(elem.id)}
      />
      <label htmlFor="" onDoubleClick={() => handleCheckbox(elem.id)}>
        {elem.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex={0}
        onClick={() => handleDeleteItem(elem.id)}
        aria-label={`Delete ${elem.item}`}
      />
    </li>
  );
};

export default ContentLineItem;
