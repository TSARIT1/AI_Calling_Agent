import "./SearchBar.css";

const SearchBar = ({
  value,
  onChange,
  placeholder
}) => {

  return (

    <div className="search-wrapper">

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
};

export default SearchBar;