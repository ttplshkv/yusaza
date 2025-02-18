import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
