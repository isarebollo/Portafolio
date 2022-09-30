
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Layout from "./js/layout";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Layout />);