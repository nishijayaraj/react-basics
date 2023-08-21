import {} from "react";
import MouseEvent from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["US", "Tokyo", "Landon", "Paris", "Spain"];
  //items = [];
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  //Hooks
  // const [stateVariable, updaterFunction] =usrSate(initialVariableValue)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
