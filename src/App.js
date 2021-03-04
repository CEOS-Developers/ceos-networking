import styled from "styled-components";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
