import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item"> An Item</li>
        <li className="list-group-item"> An Second Item</li>
        <li className="list-group-item"> An Third Item</li>
        <li className="list-group-item"> An Fourth Item</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
