import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dalnara from "./layouts/Dalnara";
import Story from "./layouts/Story";
import GlobalStyle from "styles/GlobalStyle";
import { IconLoader } from "components/IconLoader";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconLoader />
      <Routes>
        <Route path="/story" Component={Story} />
        <Route path="/dalnara" Component={Dalnara} />
      </Routes>
    </div>
  );
}

export default App;
