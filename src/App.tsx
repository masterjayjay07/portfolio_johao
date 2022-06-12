import React from "react";
import AppRoutes from "./routes";
import Global from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <Global />
      <AppRoutes />
    </div>
  );
};

export default App;
