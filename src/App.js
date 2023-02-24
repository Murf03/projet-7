import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { baseUrl, baseUrlSlash, aboutUrl } from "./constants";

import MyRouter from "./router/router";
import Header from "./composants/header";
import Footer from "./composants/footer";

const apparts = require("./logements/logements.json");

class App extends React.Component {
  isBaseUrl(link) {
    if (link === baseUrlSlash || link === baseUrl) {
      return true;
    }
    return false;
  }

  constructor(props) {
    super(props);
    const url = window.location.pathname;
    const pageId = this.isBaseUrl(url) ? 0 : url === aboutUrl ? 1 : 2;
    this.state = {
      position: pageId,
    };

    this.hasClicked = this.hasClicked.bind(this);
  }

  hasClicked(id) {
    this.setState((prevState) => ({
      position: id,
    }));
  }

  componentDidUpdate() {
    const url = window.location.pathname;
    const pageId = this.isBaseUrl(url) ? 0 : url === aboutUrl ? 1 : 2;
    if (pageId !== this.state.position) {
      this.setState((prevState) => ({
        position: pageId,
      }));
    }
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <div className="app-header">
            <Header pageId={this.state.position} click={this.hasClicked} />
          </div>
          <div className="app-body">
            <MyRouter hasClicked={this.hasClicked} apparts={apparts} />
          </div>
          <div className="app-footer">
            <Footer />
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
