import style from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard() {
  return (
    <div
      style={{
        alignSelf: "stretch",
      }}
    >
      <div className={style.keyboard}>
        {KEYS.map((key) => {
          return (
            <button key={key} className={style.key}>
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
