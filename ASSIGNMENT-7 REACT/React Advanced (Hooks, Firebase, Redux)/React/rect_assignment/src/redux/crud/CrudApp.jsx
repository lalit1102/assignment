import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import CrudPage from "./CrudPage";

const CrudApp = () => {
  return (
    <Provider store={store}>
      <CrudPage />
    </Provider>
  );
};

export default CrudApp;
