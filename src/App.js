import React from "react";
import "./App.css";
import Paginations from "./components/Paginations";

const App = () => {
  return (
    <div>
      <Paginations itemsPerPage={10} />
    </div>
  );
};

export default App;
