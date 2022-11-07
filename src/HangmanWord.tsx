import style from "./HangmanWord.module.css";

export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <div className={style.hangmanWord}>
      {word.split("").map((letter, index) => {
        return (
          <span key={index} className={style.textSpan}>
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
