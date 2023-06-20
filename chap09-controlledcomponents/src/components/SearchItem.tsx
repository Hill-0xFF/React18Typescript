import { ChangeEvent, SetStateAction } from 'react';

type SearchProp = {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>,
};

const SearchItem = ({ search, setSearch }: SearchProp) => {
  return (
    <form className="searchForm" onSubmit={(evt) => evt.preventDefault()}>
      <label htmlFor="search" className="search__label">
        Search
      </label>
      <input
        className="search__input"
        value = {search}
        onChange = {(evt: ChangeEvent<HTMLInputElement>) => setSearch(evt.currentTarget.value)}
        type="text"
        name="searchInput"
        id="search"
        role="searchbox"
        placeholder="Search Items"
      />
    </form>
  );
};

export default SearchItem;
