import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onBaseFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onBaseFormSubmit} className="ui form">
        <div className="field">
          <label>Youtube Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
