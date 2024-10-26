import css from "./SearchBox.module.css";
const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        name="search"
        placeholder="Search by name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
