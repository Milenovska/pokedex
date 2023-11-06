import "./SearchBar.css";

const SearchBar = ({ onChange }) => {
  return (
    <div>
      <input
        className="search_bar"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {/*<button> Hledej</button>*/}
    </div>
  );
};

export default SearchBar;
