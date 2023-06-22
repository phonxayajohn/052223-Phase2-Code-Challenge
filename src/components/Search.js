import React from "react";

function Search({ setSearchTerm }) {
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
