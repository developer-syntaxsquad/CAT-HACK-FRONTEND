import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";


const App: React.FC= () => {

  return(
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};


export default App;