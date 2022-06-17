// 1. IMPORT REACT
import React, { useContext } from "react";
// 2. ADDITIONAL IMPORTS
import CheeseContext from "./../contexts/CheeseContext";
// 3. CREATE COMPONENT
const GrandChild = () => {
  // Let retrieve our context
  const ctx = useContext(CheeseContext);
  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  );
};
// 4. EXPORT COMPONENT
export default GrandChild;