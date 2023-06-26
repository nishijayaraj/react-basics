import {} from "react";

function ListGroup() {
  let items = ["US", "Tokyo", "Landon", "Paris", "Spain"];
  //items = [];
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className="list-group-item"
              key={item}
              onClick={() => console.log(item, index)}
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
