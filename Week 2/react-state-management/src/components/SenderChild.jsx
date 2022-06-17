// 1. IMPORT REACT
import React from "react";
// 2. ADDITIONAL IMPORTS
// 3. CREATE COMPONENT
const SenderChild = (props) => {
  return (
    <button
      onClick={() => {
        return props.updateState("Hey There!");
      }}
    >
      Click Me
    </button>
  );
};
// 4. EXPORT COMPONENT
export default SenderChild;