import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  
const link = "http://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
