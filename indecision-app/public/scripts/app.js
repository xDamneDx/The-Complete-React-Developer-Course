"use strict";

console.log('App.js is running'); // JSX - JavaScript XML

var appRoot = document.getElementById('app');
var app = {
  title: "Indecision App",
  subtitle: "Put Your Life in The Hands of The Computer",
  options: ["One", "Two"]
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? 'Here are your options:' : 'No options'), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Tow")));
ReactDOM.render(template, appRoot);
