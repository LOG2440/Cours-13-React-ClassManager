import { createContext } from "react";
import { CLASSES } from "./classes";

const ClassContext = createContext({
  classes: CLASSES,
});

export default ClassContext;
