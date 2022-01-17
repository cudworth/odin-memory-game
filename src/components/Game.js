import "./Game.css";
import { useState } from "react";
import Tile from "./Tile";

import img1 from "./images/fish-g02eb89af5_640.jpg";
import img2 from "./images/fish-gf5a06d315_640.jpg";
import img3 from "./images/fish-gce7fa3185_640.jpg";
import img4 from "./images/hunter-brumels-i1aaOj95ZFk-unsplash.jpg";
import img5 from "./images/fish-ged2b7d577_640.jpg";
import img6 from "./images/isolated-g58f5f90cf_640.png";
import img7 from "./images/fish-gf15ff5c1e_640.jpg";
import img8 from "./images/salmon-g0c6219b45_640.jpg";
const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

function Game(props) {
  const [clicked, setClicked] = useState([]);

  function handleTileClick(e) {
    if (clicked.includes(e.target)) {
      setClicked([]);
      props.onGameEnd();
    } else {
      setClicked((prev) => {
        const next = [...prev];
        next.push(e.target);
        return next;
      });
      props.onScore();
    }
  }

  function renderTiles() {
    const indices = randomOrder(imgs.length);
    return indices.map((index) => {
      return (
        <Tile
          key={index}
          image={imgs[index]}
          alt="fish pic"
          onClick={handleTileClick}
        />
      );
    });
  }

  return <div className="Game flex-row wrap padding">{renderTiles()}</div>;
}
export default Game;

function randomOrder(length) {
  const arr = [],
    rand = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  while (arr.length) {
    const i = Math.floor(Math.random() * arr.length);
    rand.push(arr.splice(i, 1));
  }
  return rand;
}
