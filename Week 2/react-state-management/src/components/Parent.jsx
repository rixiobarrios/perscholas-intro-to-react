// 1. IMPORT REACT
import React, { useState } from "react";
// 2. ADDITIONAL IMPORTS
import SenderChild from "./SenderChild";
import ReceiverChild from "./ReceiverChild";
// 3. CREATE COMPONENT
const Parent = () => {
  // LETS CREATE A PIECE OF STATE
  const [state, setState] = useState("Hello");
  // LETS CREATE A FUNCTION TO UPDATE OUR PIECE OF STATE
  const updateState = (data) => {
    setState(data);
  };
  return (
    <div>
      <SenderChild updateState={updateState} />
      <ReceiverChild state={state} />
    </div>
  );
};
// 4. EXPORT COMPONENT
export default Parent;