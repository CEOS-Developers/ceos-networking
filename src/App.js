import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages";
import NewProfilePage from "./pages/new-profile";

function App() {
  return (
    <Router>
      <Route path="/new-profile" exact>
        <NewProfilePage />
      </Route>
      <Route path="/" exact>
        <IndexPage />
      </Route>
    </Router>
  );
}

export default App;
