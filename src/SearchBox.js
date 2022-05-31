import React from "react";
import { robots } from "./robots";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input type="search" placeholder="Search Robots" onChange={handleChange} />
  );
};

// const SearchBox = ({ placeholder, handleChange }) => {
//   return (
//     <input
//       className="pa3 ba b--green bg-lightest-blue"
//       type="search"
//       placeholder={placeholder}
//       onChange={handleChange}
//     />
//   );
// };

export default SearchBox;
