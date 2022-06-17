// 1. IMPORT REACT
import React from "react";
// 2. ADDITIONAL IMPORTS
import Child from "./Child";
import CheeseContext from "./../contexts/CheeseContext";
// 3. CREATE COMPONENT
const Parent = () => {
  return (
    <div>
      <CheeseContext.Provider value="Guda Cheese">
        <Child />
      </CheeseContext.Provider>
    </div>
  );
};
// 4. EXPORT COMPONENT
export default Parent;