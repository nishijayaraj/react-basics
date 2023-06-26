import {} from "react";

function ListGroup() {
  let items = ["US", "Tokyo", "Landon", "Paris", "Spain"];
  <li className="list-group-item"> An Item</li>;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
