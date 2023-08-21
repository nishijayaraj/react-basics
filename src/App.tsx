import ListGroup from "./components/ListGroup";

function App() {
  let items = ["US", "Tokyo", "Landon", "Paris", "Spain"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
