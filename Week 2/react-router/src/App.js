// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// 1. IMPORT REACT
import React from "react";
// 2. ADDITIONAL IMPORTS
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// 3. CREATE COMPONENT
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Navigation />
      {/* 
        First Syntax: Access to custom props. No access to routerProps
      <Route path="/home">
        <Home homeData="This is data for home component" />
      </Route>
      <Route path="/about">
        <About aboutData="This is data for about page" />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route> */}
      {/* 
        Second Syntax: Access to routerProps. No access to custom props
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} /> */}
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => {
            return (
              <Home
                {...routerProps}
                homeData="This is data for home component"
              />
            );
          }}
        />
        <Route
          path="/about"
          render={() => {
            return <About />;
          }}
        />
        <Route
          path="/projects"
          render={() => {
            return <Projects />;
          }}
        />
      </Switch>
    </div>
  );
};
// 4. EXPORT COMPONENT
export default App;