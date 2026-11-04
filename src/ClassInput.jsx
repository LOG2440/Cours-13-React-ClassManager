import { useState, useContext } from "react";
import ClassContext from "./ClassContext";

function ClassInput() {
  const [value, setValue] = useState("");
  const { addClass } = useContext(ClassContext);

  const addClassAndReset = () => {
    addClass(value);
    setValue("");
  };
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={addClassAndReset}>+</button>
      <p>Vous avez entré: {value}</p>
    </>
  );
}

export default ClassInput;
