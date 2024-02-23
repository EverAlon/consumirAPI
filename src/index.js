"use client"
import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Rutas } from "./components/Rutas";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Rutas/>
    </>
)
