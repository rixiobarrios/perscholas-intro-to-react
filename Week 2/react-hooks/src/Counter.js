// 1. IMPORT REACT
import React, { useState, useEffect } from "react";
// 2. ADDITIONAL IMPORTS
// 3. CREATE COMPONENT
const Counter = () => {
  // Let's declare new state inside of our component
  const [counter, setCounter] = useState(0);
  // second piece of state
  const [evenCounter, setEvenCounter] = useState(0);
  // Let's create an effect to render our component everytime our evenCounter state changes
  useEffect(() => {
    // Let's log something inside our console
    console.log("I am just a random log");
  }, [evenCounter]);
  // Let's create a function to add one to our counter
  const handleAddOne = () => {
    if (counter % 2 === 0) {
      setEvenCounter(evenCounter + 1);
    }
    // If counter is not even update counter
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Counter {counter}</h1>
      <h1>Even Counter {evenCounter}</h1>
      <button onClick={handleAddOne}>Click Me to Add One</button>
    </div>
  );
};
// useEffect
// 1. By passing nothing as second parameter of useEffect
/*
  useEffect(() => {
    Do something here
  })
*/
// 2. By passing an empty array as a second parameter
/*
  useEffect(() => {
    Do something here
  }, [])
*/
// 3. By passing an array with data inside of it
/*
  useEffect(() => {
    Do something here
  }, [data])
*/
// 4. EXPORT COMPONENT
export default Counter;