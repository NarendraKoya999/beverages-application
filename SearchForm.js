import React, { useState } from 'react';

const SearchForm = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    // Trigger search if at least 2 characters are entered
    if (value.length >= 2) {
      setSearchTerm(value);
    } else {
      setSearchTerm('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Trigger search if at least 2 characters are entered
    if (searchValue.length >= 2) {
      setSearchTerm(searchValue);
    } else {
      setSearchTerm('');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search cocktails (min. 2 characters)..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchForm;
