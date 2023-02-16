import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Licensing from "./components/Licensing";
// import Marketing from "./components/Marketing";
// import Distribution from "./components/Distribution";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <div className="scrolltotop">
        <ScrollToTop smooth color="red" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />
          {/* <Route exact path="/distribution" component={Distribution} /> */}
          {/* <Route exact path="/marketing" component={Marketing} /> */}
          {/* <Route exact path="/licensing" component={Licensing} /> */}
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
