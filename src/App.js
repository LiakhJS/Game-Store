import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { store } from "./redux";
import { Provider } from "react-redux";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/"
              element={<HomePage />}>
            </Route>
            <Route exaxt path="/app/:game"
              element={<GamePage/>}>
            </Route>
            <Route  path="/order/"
              element={<OrderPage/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
