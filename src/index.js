import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LayoutComponent } from "./components/layout";
import "./scss/style.scss";
ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter>
                <LayoutComponent />
            </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
