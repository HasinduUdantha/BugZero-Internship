import "./App.css";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 toggle={this.toggle} />
      <Transition
        native
        items={this.state.showComponent3}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(show) =>
          show &&
          ((props) => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))
        }
      </Transition>
    </div>
  );
}

export default App;
