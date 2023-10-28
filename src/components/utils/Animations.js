import { StyleSheet } from "aphrodite";
import { fadeInRight, slideInDown, tada } from "react-animations";

const styles = StyleSheet.create({
  infiniteBounce: {
    animationName: slideInDown,
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1s",
  },
  tada: {
    animationName: tada,
    animationDuration: "2.2s",
    animationIterationCount: "infinite",
  },
});

export default styles;
