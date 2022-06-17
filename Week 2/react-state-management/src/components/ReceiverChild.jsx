// 1. IMPORT REACT
import React from "react";
// 2. ADDITIONAL IMPORTS
// 3. CREATE COMPONENT
const ReceiverChild = (props) => {
  return (
    <div>
      <h1>{props.state}</h1>
    </div>
  );
};
// 4. EXPORT COMPONENT
export default ReceiverChild;