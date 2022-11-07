import style from "./HangmanDrawing.module.css";

const HEAD = <div className={style.head} />;
const BODY = <div className={style.body} />;
const RIGHT_ARM = <div className={style.right_arm} />;
const LEFT_ARM = <div className={style.left_arm} />;
const RIGHT_LEG = <div className={style.right_leg} />;
const LEFT_LEG = <div className={style.left_leg} />;

export function HangmanDrawing() {
  return (
    <div className={style.mainDiv}>
      <div className={style.topBarMini} />
      <div className={style.topBar} />
      <div className={style.khamba} />
      <div className={style.bottomBar} />
    </div>
  );
}
