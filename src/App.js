import React from "react";
import ReactDOM from 'react-dom/client';
import Body from "./Components/Body";
// import "./input.css"
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <Body/>
            </Provider>
)
};
export default AppLayout;