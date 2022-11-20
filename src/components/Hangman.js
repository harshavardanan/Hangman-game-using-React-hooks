import React, { useState, useEffect } from "react";
import { randomWord } from "./WordPicker";
import "./Hangman.css";
import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

const Hangman = () => {
  const images = [img0, img1, img2, img3, img4, img5, img6];
  const maxMistakes = 6;
  const [guessed, setGuessed] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [answer, setAnswer] = useState("");
  const [clue, setClue] = useState(0);
  const [hints, setHint] = useState([]);
  useEffect(() => {
    const words = randomWord().name;
    setHint(words.hint);
    setAnswer(words.id);
  }, []);

  const handleClick = (e) => {
    let letter = e.target.value;
    setGuessed([...guessed, letter]);
    //guessed.push(letter);
    let errors = answer.includes(letter) ? 0 : 1;
    setMistakes((previousState) => previousState + errors);
    setClue((previousState) => previousState + errors);
    //mistakes += errors;
    console.log(mistakes, letter, guessed, answer, clue);
  };

  function guessedWord() {
    return answer
      .split("")
      .map((letter) => (guessed.includes(letter) ? letter : "__ "));
  }
  function generateButtons() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("").map((letter) => (
      <button
        className="btn"
        key={letter}
        value={letter}
        onClick={handleClick}
        disabled={guessed.includes(letter)}
      >
        {letter}
      </button>
    ));
  }
  //console.log(hint);
  let gameOver = mistakes === maxMistakes;
  let gameStat = "";
  let isWinner = guessedWord().join("") === answer;

  if (isWinner) {
    gameStat = "You Win";
  }

  let movieName = "You lost, the name of the movie was " + answer;

  function resetGame() {
    let word = randomWord().name;
    setMistakes(0);
    setGuessed([]);
    setClue(0);
    setAnswer(word.id);
    setHint(word.hint);
  }
  return (
    <div>
      <div className="game-container">
        <h1 className="text-center">Hangman</h1>
        <div className="image-container">
          <img src={images[mistakes]} alt="hangman" />
        </div>
        <div className="float-right">
          <p className="mistakes">
            Mistakes {mistakes} out of {maxMistakes}
          </p>
          <p className="hints">{hints[Math.floor(clue / 2)]}</p>
        </div>
        <div className="keys">{!gameOver ? generateButtons() : ""}</div>
        <p className="guessed">Letters Guessed : {guessed}</p>
        <p>{gameStat}</p>
        <p>{!gameOver ? guessedWord() : movieName}</p>
        <div>
          <button className="reset-btn" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hangman;
