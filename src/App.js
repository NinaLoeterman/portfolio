import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar/Sidebar.jsx";
import AboutPage from "./components/pages/AboutPage/AboutPage.jsx";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import ProjectsPage from "./components/pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
