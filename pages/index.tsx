import React from "react";
import Login from "@containers/auth/login";


const Home: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" , background:"rgba(1,1,1,0.03)"}}
    >
      <Login/>
    
    </div>
  );
};

export default Home;
