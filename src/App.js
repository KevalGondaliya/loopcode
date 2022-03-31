import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/home";
import Carrer from "./Career/carrer";
import Footer from "./Footer/footer";
import AboutUs from "./AboutUs/about";
import Contact from "./Contact/contact";
import Services from "./Services/services";
import OurClients from "./Clients/ourClients";
import Portfolio from "./Portfolio/portofolio";
import Header from "./Header/MainHeader/header";

import "./App.scss";
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
