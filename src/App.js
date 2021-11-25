import { createContext, React, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import AboutUs from "./pages/Aboutus/Aboutus";
import Pricing from './pages/Pricing/Pricing';


export const ClientContext = createContext();

function App() {
  const [client, setClient] = useState();
  return (
    <ClientContext.Provider value={[client, setClient]}>
      <Router>
        <Navbar />
        <div style={{ minHeight: '80vh' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
