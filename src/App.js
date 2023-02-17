import "./App.css";
import { Header } from "./component/Header";
import { LeftBlock } from "./component/leftBlock/LeftBlock";
import { RightBlock } from "./component/rightBlock/RightBlock";

function App() {
  return (
    <div className="main">
      <div className="App">
        <Header />
        <div className="contentWrapper">
          <LeftBlock />
          <RightBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
