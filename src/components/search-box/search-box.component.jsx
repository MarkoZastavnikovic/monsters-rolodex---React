import React from "react";
import "./search-box.styles.css";

const SearchBox = ({
  placeholder = "placeholder",
  handleChange = () => console.log(`No handleChange property!`),
  ...rest
}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
