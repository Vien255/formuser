import React from "react";
import { RouterProvider } from "react-router-dom/dist";
import "./App.css";
import { router } from "./routers";

function App() {
  return (
    <div className="App">
      <div className="routes">
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
        />
      </div>
    </div>
  );
}

export default App;
