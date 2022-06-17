// 1. IMPORT REACT
import React from "react";
// 2. ADDITIONAL IMPORTS
import GrandChild from "./GrandChild";
// 3. CREATE COMPONENT
const Child = () => {
  return (
    <div>
      <GrandChild />
    </div>
  );
};
// 4. EXPORT COMPONENT
export default Child;