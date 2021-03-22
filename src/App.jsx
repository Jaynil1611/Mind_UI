/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Alert,
  Button,
  Card,
  Image,
  Input,
  List,
  Navigation,
  Modal,
  Grid,
  Typography,
  Toast,
  Rating,
  Home,
} from "./components";
import { v4 } from "uuid";
import { useState } from "react";

const routes = [
  { id: v4(), path: "/avatar", name: "Avatar", component: <Avatar /> },
  { id: v4(), path: "/badge", name: "Badge", component: <Badge /> },
  { id: v4(), path: "/alert", name: "Alert", component: <Alert /> },
  { id: v4(), path: "/button", name: "Button", component: <Button /> },
  { id: v4(), path: "/card", name: "Card", component: <Card /> },
  { id: v4(), path: "/image", name: "Image", component: <Image /> },
  { id: v4(), path: "/input", name: "Input", component: <Input /> },
  { id: v4(), path: "/list", name: "List", component: <List /> },
  { id: v4(), path: "/nav", name: "Navigation", component: <Navigation /> },
  { id: v4(), path: "/modal", name: "Modal", component: <Modal /> },
  { id: v4(), path: "/rating", name: "Rating", component: <Rating /> },
  { id: v4(), path: "/grid", name: "Grid", component: <Grid /> },
  {
    id: v4(),
    path: "/typography",
    name: "Typography",
    component: <Typography />,
  },
  { id: v4(), path: "/toast", name: "Toast", component: <Toast /> },
  { id: v4(), path: "/", name: "Home", component: <Home /> },
];

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <Router>
        <div className="grid-row">
          <div className="heading">
            <div className="intro">
              <h1 className="heading-text">Mind UI Documentation</h1>
              <ul className="list-style navbar">
                <li className="list-item">
                  <Link to={"/"}> Home </Link>
                </li>
                <li className="list-item">
                  <Link to={"/"}> About </Link>
                </li>
                <li className="list-item">
                  <a
                    href="https://github.com/Jaynil1611/mind-ui"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div
            className={`${showMenu ? "mobile-navbar" : "grid-col left-nav"}`}
          >
            <ul className={`list-style`}>
              {routes.map(({ id, path, name }) => (
                <li className="list-item" key={id}>
                  <Link to={path} onClick={closeMenu}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {showMenu ? (
              <i className="fas fa-times fa-2x"></i>
            ) : (
              <i className="fas fa-bars fa-2x"></i>
            )}
          </div>
          <div className="grid-col">
            <Switch>
              {routes.map(({ id, path, component }) => (
                <Route key={id} path={path}>
                  {component}
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
