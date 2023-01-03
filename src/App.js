/* import { css } from "aphrodite";
import styles from "./components/common/Animations"; */
import BrideGroom from "./components/BrideGroom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="h-screen">
      {/*     <p className={css(styles.fadeInRight)}}>
        prova
      </p> */}
      <Homepage />
      <BrideGroom />
    </div>
  );
}

export default App;
