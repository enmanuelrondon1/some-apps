import { useState } from "react";
import Values from "values.js";
import { FormColor } from "./FormColor";
import "./colors.css";
import { DisplayColors } from "./DisplayColors";

export const ValuesColors = () => {
  const [list, setList] = useState(new Values("#ffff00").all(5));
  return (
    <>
      <FormColor setList={setList} />
      <DisplayColors list={list} />
    </>
  );
};
