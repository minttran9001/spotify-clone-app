import { useEffect, useState } from "react";
import "./App.scss";
import {  loginUrl } from "./api/spotify";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { useDataAuth } from "./context/AuthLayer";
import { getUserFromUrl } from "./actions";

function App() {
  const [{ isLogged }, dispatch] = useDataAuth();
  useEffect(() => {
    getUserFromUrl(dispatch);
  }, []);
  return (
    <div className="App">
      {isLogged ? <Player /> : <Login loginUrl={loginUrl} />}
    </div>
  );
}

export default App;
