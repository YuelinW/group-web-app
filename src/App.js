import React from "react";
import './App.css';
import NavigationSidebar from "./navigation-sidebar/index.js";

function App() {
  return (
    <>
      <div className="row mt-5 ms-5">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar/>
        </div>
      </div>

    </>
  );
}

export default App;
