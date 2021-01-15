import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import { Signuppage } from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={Signuppage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
