// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import OMDBQueryForm from "./OMDBQueryForm";

// 3. CREATE COMPONENT
class App extends React.Component {
  render() {
    return (
      <>
        <OMDBQueryForm />
      </>
    );
  }
}

// 4. EXPORT COMPONENT
export default App;
