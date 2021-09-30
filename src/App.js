import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/MainHeader/header";
import Home from "./Home/home";
import Services from "./Services/services";
import OurClients from "./Clients/ourClients";
import Portfolio from "./Portfolio/portofolio";
import Carrer from "./Career/carrer";
import AboutUs from "./AboutUs/about";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/career">
            <Carrer />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/clients">
            <OurClients />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
