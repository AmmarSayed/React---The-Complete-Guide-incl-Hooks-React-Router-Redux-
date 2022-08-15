import React, { useState } from "react";
import Output from "./Output";
import Async from "./Async";
const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const handleChangeText = () => {
    setChangeText(true);
  };

  return (
    <>
      <h2>Hello World</h2>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text!</button>
      <Async />
    </>
  );
};

export default Greeting;
