import React, { ChangeEvent, FormEvent, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

type NewItem = {
  item: string,
  setNewItem: React.Dispatch<React.SetStateAction<string>>,
  // setNewItem: React.Dispatch<React.SetStateAction<string | SubmitItem | undefined>>,
  // handleSubmitItem: (str: string) => void; wrong ????
  // handleSubmitItem: React.MouseEventHandler<HTMLInputElement> , wrong ????
  // handleSubmitItem: (evt:  React.ChangeEventHandler<HTMLInputElement>  ) => void, wrong ????
  // handleSubmitItem: (evt: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => void, wrong ????
  // handleSubmitItem: (evt: ChangeEvent<HTMLInputElement>) => void,
  handleSubmitItem: (evt: FormEvent<HTMLFormElement>) => void,
  // handleSubmitItem: () => void,
  // ref: React.RefObject<HTMLInputElement | undefined | React.MutableRefObject<undefined >>,
  // addInputRef: React.LegacyRef<HTMLInputElement> | React.RefObject<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>,
  // addInputRef: React.MutableRefObject<undefined>,
  // addInputRef: React.LegacyRef<HTMLInputElement>,
  // ref: React.MutableRefObject<undefined>,
  // addref: React.ClassAttributes<HTMLInputElement>,
  // ref: React.LegacyRef<HTMLInputElement | undefined>,
  // ref: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  // DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
};

const AddItem = ({ item, handleSubmitItem, setNewItem }: NewItem) => {
  const inputRef = useRef<HTMLInputElement | HTMLInputElement >(null)
  
  return (
    <form action="" className="addForm" onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmitItem(evt) }>
      <label className="addForm__label" htmlFor="addItemInput">
        Add Item
      </label>
      <input
        autoFocus
        ref={inputRef}
        name=""
        type="text"
        className="addForm__input"
        value={item}
        id="addItemInput"
        placeholder="Add Item"
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setNewItem(evt.currentTarget.value)}
        required
      />
      <button className="addForm__button" type="submit" arial-label="Add Item" onClick={() => inputRef.current?.focus() }>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
