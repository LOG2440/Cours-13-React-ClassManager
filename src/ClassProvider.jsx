import { useState } from "react";
import { CLASSES } from "./classes";
import ClassContext from "./ClassContext";

const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState(CLASSES);
  function deleteClass(selectedClass) {
    const updatedList = classes.filter((x) => x.sigle !== selectedClass);
    setClasses(updatedList);
  }

  function addClass(newClass) {
    if (!newClass.trim() || classes.some((c) => c.sigle === newClass)) return;
    const updatedList = [...classes];
    updatedList.push({
      sigle: newClass,
      credits: Math.round(Math.random() * 6 + 1),
    });
    setClasses(updatedList);
  }
  return (
    <ClassContext.Provider value={{ classes, setClasses, deleteClass, addClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export default ClassProvider;
