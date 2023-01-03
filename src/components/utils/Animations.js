import { StyleSheet } from "aphrodite";
import { fadeInRight, slideInDown } from "react-animations";

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
});

export default styles;
