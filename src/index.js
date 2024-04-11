import React from "react";
import ReactDOM from "react-dom";

// // 引入我的第一个Class组件
import App1 from "./components/class_component";
// ReactDOM.render(<App1/>,document.getElementById('root'))

// // 引入我的第一个Function组件
import App2 from "./components/function_comp";
// ReactDOM.render(<App2/>, document.getElementById('root'))

// 引入多组件使用数组
ReactDOM.render([<App1 />, <App2 />, <h1>test</h1>], document.getElementById('root'))