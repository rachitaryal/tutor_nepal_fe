import React from "react";

function SearchInput(props) {
  const { onSearch } = props;

  const handleChange = (e) => onSearch(e);
  return (
    <div className="col-sm-12 col-md-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          onChange={handleChange}
          placeholder="What would you like to study..."
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
}

export default SearchInput;
