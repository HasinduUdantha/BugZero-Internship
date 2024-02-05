import "./App.css";

function buttonClick() {
  console.log("Button is clicked");
  alert("button is clicked");
}

function App() {
  return (
    <div>
      <h1>React event handling</h1>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <button onClick={buttonClick}>Click here</button>
    </div>
  );
}

export default App;
