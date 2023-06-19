import {v4 as uuidv4} from 'uuid'
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

const ContentLineItem = ({
  elem,
  handleCheckbox,
  handleDeleteItem,
}: ContentLineItem) => {
  return (
    <li className="item" >
      <input
        // key={elem.id}
        type="checkbox"
        checked={elem.checked}
        id={elem.id.toString()}
        onChange={() => handleCheckbox(elem.id)}
      />
      <label
        key={uuidv4()}
        htmlFor={elem.id.toString()}
        onDoubleClick={() => handleCheckbox(elem.id)}
      >
        {elem.item}
      </label>
      <FaTrashAlt
        // key = {uuidv4()}
        role="button"
        tabIndex={0}
        onClick={() => handleDeleteItem(elem.id)}
        aria-label={`Delete ${elem.item}`}
      />
    </li>
  );
};

export default ContentLineItem;
