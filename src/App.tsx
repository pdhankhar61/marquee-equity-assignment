import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AuthContextProvider from "./contexts/AuthContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <TodoContextProvider>
          <RouterProvider router={router} />
        </TodoContextProvider>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
