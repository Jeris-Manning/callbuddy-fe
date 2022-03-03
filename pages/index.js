import React from "react";
import Welcome from "../components/Welcome";
import Home from "../components/Home";
import { useUser } from "@auth0/nextjs-auth0";

const App = () => {
  const { user, error, isLoading } = useUser();
  if (user) {
    
    return <Home user={user}/>;
  }
  return <Welcome />;
};

export default App;
