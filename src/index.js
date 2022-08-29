import React from "react";
import { createRoot } from "react-dom/client";

import { config } from "./modules/config";
import AppService from "./modules/app.service";

import "./modules/ts.module";

import App from "./App";

import "./css/index.css";
import "./less/index.less";
import "./scss/index.scss";

console.log("Config key: ", config.key);

const service = new AppService("Testing ES6 Class injection. Works!");
service.log();

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
