// 1. IMPORT REACT
import React from "react";
// 2. ADDITIONAL IMPORTS
import Users from "./Users";
// 3. CREATE COMPONENT
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Users />
    </div>
  );
};
// 4. EXPORT COMPONENT
export default App;
