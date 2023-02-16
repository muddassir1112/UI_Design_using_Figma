import "./App.css";
import { Header } from "./component/Header";
// import { BillingAddress } from "./component/BillingAddress";
import { LeftBlock } from "./component/LeftBlock";

function App() {
  return (
    <div className="main">
      <div className="App">
        <Header />
        <div className="contentWrapper">
          <LeftBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
