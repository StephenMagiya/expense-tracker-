function SearchBar({ searchTerm, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
