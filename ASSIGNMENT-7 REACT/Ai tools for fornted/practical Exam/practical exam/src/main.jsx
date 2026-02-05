import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import LalitStore from "./component/ReduxRtk crud/LalitStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={LalitStore}>
      <App />
    </Provider>
  </StrictMode>
);
