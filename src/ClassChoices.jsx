import { useContext } from "react";
import ClassContext from "./ClassContext";

const ClassChoices = () => {
  const { classes, deleteClass } = useContext(ClassContext);
  return (
    <>
      <p>Cliquez sur un cours pour le supprimer de la liste</p>
      <ul className="items">
        {classes.map((item) => {
          return (
            <li key={item.sigle} onClick={() => deleteClass(item.sigle)}>
              <div className="item">
                <p className="item-text">
                  {item.sigle} : {item.credits}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ClassChoices;
