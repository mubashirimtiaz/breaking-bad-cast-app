import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        name={text}
        value={text}
        onChange={handleChange}
        className="form-control"
        placeholder="seach character..."
      />
    </form>
  );
};

export default Search;
