import { createContext, React, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home/Home";


export const ClientContext = createContext();

function App() {
  const [client, setClient] = useState();
  return (
    <ClientContext.Provider value={[client, setClient]}>
      <Router>

        <div style={{ minHeight: '80vh' }}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>

      </Router>
    </ClientContext.Provider>
  );
}

export default App;
