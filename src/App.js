import { createContext, React, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Category from "./components/Category/Category";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import UploadImage from "./components/Dashboard/UploadImage/UploadImage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import AboutUs from "./pages/Aboutus/Aboutus";
import Login from './pages/Auth/Login';
import Contactus from "./pages/Contactus/Contactus";
import Faq from "./pages/FAQ/Faq";
import Gallery from './pages/Gallery/Gallery';
import SingleImagePage from './pages/Gallery/SingleImgPage';
import Home from "./pages/Home/Home";
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
            <Route path="/faq" component={Faq} />
            <Route path="/login" component={Login} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contactus" component={Contactus} />
            <PrivateRoute path="/gallery"><Gallery /></PrivateRoute>
            <PrivateRoute path="/upload"><UploadImage /></PrivateRoute>
            <PrivateRoute path="/dashboard"><AdminDashboard /></PrivateRoute>
            <PrivateRoute path="/image/:imgid"><SingleImagePage /></PrivateRoute>
            <PrivateRoute path="/category/:catid"><Category /></PrivateRoute>
          </Switch>
        </div>
        <Footer />
      </Router>
      </ClientContext.Provider>
  );
}

export default App;
