import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { registerMicroApps, start } from "qiankun";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root-0")
);

const getActiveRule = (hash: string) => (location: any) =>
  location.hash.startsWith(hash);

// 是否 production 环境
const isEnvProd = import.meta.env.PROD;
const prodEntryPrefix = "//frontend-trainee.github.io";

registerMicroApps([
  {
    name: "reactApp", // app name registered
    entry:
      (isEnvProd ? prodEntryPrefix : "//localhost:5000") + "/micro-app-react",
    container: "#container",
    activeRule: getActiveRule("#/micro-app-react"),
  },
  {
    name: "vue2App",
    entry: isEnvProd
      ? prodEntryPrefix + "/micro-app-vue2/"
      : "//localhost:8080",
    container: "#container",
    activeRule: getActiveRule("#/micro-app-vue2"),
  },
  {
    name: "vue3App",
    entry: isEnvProd
      ? prodEntryPrefix + "/micro-app-vue3/"
      : "//localhost:8081",
    // entry: { scripts: ['//localhost:7100/main.js'] },
    container: "#container",
    activeRule: getActiveRule("#/micro-app-vue3"),
  },
]);

start();
