import { useSelector } from "react-redux";
import { RootState } from "store/reducers";
import Main from "./components/Main";

function App() {
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
