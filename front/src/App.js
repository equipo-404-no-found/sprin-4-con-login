import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { LoginButton } from "./components/login/login.js";
import { Profile } from "./profile.js";
import { LogoutButton } from "./logout.js";
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
function App() {

  return (
    
    <DataProvider>
    <div className="App">
      <Router>
      <LoginButton />
      <Header />
      <Profile/>
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;