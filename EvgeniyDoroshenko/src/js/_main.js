import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import Login from "./Login";
import "../css/style.css";

class App extends React.Component {
  render() {
    let menuItems = [
      { href: "#main", title: "Главная" },
      { href: "#about-us", title: "О нас" },
      { href: "#catalog", title: "Каталог товаров" },
      { href: "#sales", title: "Распродажа" }
    ];

    return (
      <div class="wrapper">
        <Menu items={menuItems} />
        <Login />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
