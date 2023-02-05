import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './composants/footer';
import About from './pages/about';
import ErrorPage from './pages/errorPage';
import Header from './composants/header';
import Appart from './pages/appart';

const apparts = require('./logements/logements.json');

const baseUrlSlash = '/projet-7/';
const baseUrl = '/projet-7';
const aboutUrl = baseUrl + '/about';
const appartUrl = baseUrl + '/:id';


class Kasa extends React.Component {

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
    console.log("current : " + id);
    this.setState(prevState => ({
      position: id,
    }));
  }

  componentDidUpdate() {
    const url = window.location.pathname;
    const pageId = this.isBaseUrl(url) ? 0 : url === aboutUrl ? 1 : 2;
    if (pageId !== this.state.position) {
      this.setState(prevState => ({
        position: pageId,
      }));
    }
  }

  render() {
    return <React.StrictMode>
      <Router>
        <div className='app-header'>
          <Header pageId={this.state.position} click={this.hasClicked} />
        </div>
        <Routes>
          <Route path={baseUrlSlash}
            element={<div className='app-body'> <Home click={this.hasClicked} data={apparts} /></div>}>
          </Route>
          <Route path={baseUrl}
            element={<div className='app-body'> <Home click={this.hasClicked} data={apparts} /></div>}>
          </Route>
          <Route path={appartUrl} element={<div className='app-body'><Appart /></div>} />
          <Route path={aboutUrl} element={<div className='app-body'> <About /> </div>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <div className='app-footer'>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Kasa />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();