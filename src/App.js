import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar/Sidebar.jsx";
import AboutPage from "./components/pages/AboutPage/AboutPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/projects"></Route>
          <Route path="/resume"></Route>
          <Route path="/contact"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
