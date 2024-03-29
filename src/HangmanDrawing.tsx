import style from "./HangmanDrawing.module.css";

const HEAD = <div className={style.head} />;
const BODY = <div className={style.body} />;
const RIGHT_ARM = <div className={style.right_arm} />;
const LEFT_ARM = <div className={style.left_arm} />;
const RIGHT_LEG = <div className={style.right_leg} />;
const LEFT_LEG = <div className={style.left_leg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className={style.mainDiv}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={style.topBarMini} />
      <div className={style.topBar} />
      <div className={style.khamba} />
      <div className={style.bottomBar} />
    </div>
  );
}
