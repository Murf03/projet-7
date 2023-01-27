import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './composants/footer';
import About from './pages/about';
import ErrorPage from './pages/errorPage';
import Header from './composants/header';
import Appart from './pages/appart';

const apparts = require('./logements/logements.json');


class Kasa extends React.Component {

  constructor(props) {
    super(props);
    const url = window.location.pathname;
    const pageId = url === "/" ? 0 : url === "/about" ? 1 : 2;
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
    console.log("updated");
    const url = window.location.pathname;
    const pageId = url === "/" ? 0 : url === "/about" ? 1 : 2;
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
          <Route exact path='/'
            element={<div className='app-body'> <Home click={this.hasClicked} data={apparts} /></div>}>
          </Route>
          <Route path='/:id' element={<div className='app-body'><Appart /></div>} />
          <Route path='/about' element={<div className='app-body'> <About /> </div>} />
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















/*

//let currentPage = "/";
let pageId = 0;
//Pas d'ici

function hasClicked(id) {
  //currentPage = window.location.pathname;
  //pageId = currentPage === "/" ? 0 : currentPage === "/about" ? 1 : 2;
  pageId = id;
  console.log("current : " + pageId);
  return id;
}

root.render(
  <React.StrictMode>
    <Router>
      <div className='app-header'>
        <Head pageId={pageId} click={hasClicked} />
      </div>
      <Routes>
        <Route exact path='/' element={<div className='app-body'> <Home click={hasClicked} data={apparts} /> </div>}>
        </Route>
        <Route path='/about' element={<div className='app-body'> <About /> </div>} />
        <Route path='/:id' element={<p>PAge details</p>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <div className='app-footer'>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


*/