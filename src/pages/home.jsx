import React from "react";
import { Link } from "react-router-dom";
import "../css/composants.css";
import HomeSlogan from "../composants/homeSlogan";
import Thumb from "../composants/thumb";

export default function Home(props) {
  const baseUrl = "/projet-7/";

  const thumbs = (
    <div className="thumbs">
      {props.data.map((e) => (
        <Link
          onClick={() => props.click(2)}
          key={e.id}
          to={baseUrl + "logement/" + e.id}
        >
          {<Thumb title={e.title} cover={e.cover} />}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="home">
      <HomeSlogan text="Chez vous, partout et ailleurs" />
      {thumbs}
    </div>
  );
}
