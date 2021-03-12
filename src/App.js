import { useEffect } from "react";
import "./App.scss";
import {  loginUrl } from "./api/spotify";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { useDataAuth } from "./context/AuthLayer";
import { getUserFromUrl } from "./actions";

function App() {
  const [{user, isLogged }, dispatch] = useDataAuth();
  useEffect(() => {
    getUserFromUrl(dispatch);
  }, []);
  return (
    <div className="App">
      {isLogged ? <Player user={user} userDispatch={dispatch} /> : <Login loginUrl={loginUrl} />}
    </div>
  );
}

export default App;
