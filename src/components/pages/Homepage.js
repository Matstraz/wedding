import { css } from "aphrodite";
import Snowfall from "react-snowfall";
import styles from "../utils/Animations";
import icons from "../utils/Icons";
import leaf3 from "../../assets/pics/leaf3.png";
import leaf4 from "../../assets/pics/leaf4.png";

export default function Homepage() {
  const petals1 = document.createElement("img");
  petals1.src = leaf3;
  const petals2 = document.createElement("img");
  petals2.src = leaf4;

  const images = [petals1, petals2];

  return (
    <div
      className="backHome h-screen flex justify-center items-center text-center text-white relative"
      id="home"
    >
      <div className="flex flex-col gap-10">
        <Snowfall
          /*    color="grey" */
          snowflakeCount={40}
          images={images}
          radius={[15.0, 18.0]}
          speed={[1.0, 2.0]}
          wind={[-0.5, 2.0]}
        />
        {/*    <p className="chopin borded text-6xl p-5 md:p-0">Alessandra & Matteo</p>
        <p className="borded text-3xl italic">15.06.2024</p> */}
      </div>
      <a
        href="#main"
        className={`${css(
          styles.infiniteBounce
        )} text-black absolute bottom-6 lg:bottom-10 italic borded`}
      >
        <p>Entra</p>
        <p>{icons.scroll}</p>
      </a>
    </div>
  );
}
