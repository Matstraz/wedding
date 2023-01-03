import { css } from "aphrodite";
import Snowfall from "react-snowfall";
import styles from "./utils/Animations";
import icons from "./utils/Icons";
import rose from "../assets/pics/rose.png";

export default function Homepage() {
  const images = { rose: rose };

  return (
    <div className="backHome h-full flex justify-center items-center text-center text-white relative">
      <div className="flex flex-col gap-10 ">
        <Snowfall color="grey" snowflakeCount={50} images={images} />
        <p className="chopin text-6xl">Alessandra & Matteo</p>
        <p className="borded text-3xl italic">15.06.2024</p>
      </div>
      <a
        href="#main"
        className={`${css(
          styles.infiniteBounce
        )} text-black absolute bottom-10 italic borded`}
      >
        <p>Enter site</p>
        <p>{icons.scroll}</p>
      </a>
    </div>
  );
}
