import React, { useState } from "react";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  color: #797b7c;
  .scoreBoard {
    width: 50%;
    height: 100px;
    border: 2px solid black;
    .scoreBoard__title--balls {
      background-color: #72f730;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .scoreBoard__title--strikes {
      background-color: #f91809;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .scoreBoard__score {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Buttonontainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  color: #797b7c;
  border: 2px solid black;
  border-top: none;
  .dashboard__btn {
    width: 75px;
    height: 25px;
    background: red;
  }
`;

function Display() {
  const [ballCounts, setBallCounts] = useState(0);
  const [strikesCounts, setStrikesCounts] = useState(0);

  function resetScore() {
    setBallCounts(0);
    setStrikesCounts(0);
  }

  function faul() {
    if (strikesCounts <= 1) {
      setStrikesCounts(strikesCounts + 1);
    }
  }
  return (
    <>
      <Board>
        <div className="scoreBoard ">
          <div className="scoreBoard__title--balls">Balls</div>
          <div className="scoreBoard__score">{ballCounts}</div>
        </div>
        <div className="scoreBoard">
          <div className="scoreBoard__title--strikes">Strikes</div>
          <div className="scoreBoard__score">{strikesCounts}</div>
        </div>
      </Board>
      <Buttonontainer>
        <button
          className="dashboard__btn"
          onClick={() =>
            ballCounts === 4 ? setBallCounts(0) : setBallCounts(ballCounts + 1)
          }
        >
          Ball
        </button>
        <button
          className="dashboard__btn"
          onClick={() =>
            strikesCounts === 3
              ? setStrikesCounts(0)
              : setStrikesCounts(strikesCounts + 1)
          }
        >
          Strikes
        </button>
        <button className="dashboard__btn" onClick={() => faul()}>
          Foul
        </button>
        <button className="dashboard__btn" onClick={() => resetScore()}>
          Hit
        </button>
      </Buttonontainer>
    </>
  );
}

export default Display;
