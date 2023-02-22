import { Route, Routes } from "react-router-dom";
import { baseUrl, baseUrlSlash, aboutUrl, appartUrl } from "../constants";
import "../App.css";
import Home from "../pages/home";
import About from "../pages/about";
import ErrorPage from "../pages/errorPage";
import Appart from "../pages/appart";

function MyRouter(props) {
  const apparts = props.apparts;
  return (
    <Routes>
      <Route
        path={baseUrlSlash}
        element={<Home click={props.hasClicked} data={apparts} />}
      ></Route>
      <Route
        path={baseUrl}
        element={<Home click={props.hasClicked} data={apparts} />}
      ></Route>
      <Route path={appartUrl} element={<Appart />} />
      <Route path={aboutUrl} element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default MyRouter;
