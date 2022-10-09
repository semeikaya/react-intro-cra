import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Main = () => {
    return <div className="main">Боди</div>;
};

root.render(
    <>
        <h1 className="head">Первый код на реакт</h1>
        <Main />
    </>
);
