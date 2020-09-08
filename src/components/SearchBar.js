import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <label>Search fro a video</label>
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(evt) => setTerm(evt.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
