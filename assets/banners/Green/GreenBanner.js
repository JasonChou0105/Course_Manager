import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BANNERCOLORS from "../../../constants/Colors/BANNERCOLORS";
import GreenBannerSvg from "./GreenBannerSvg";

function GreenBanner() {
  return (
    <LinearGradient
      colors={[BANNERCOLORS.green.light, BANNERCOLORS.green.dark]}
      style={styles.background}
    >
      <GreenBannerSvg style={styles.wave} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wave: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
  },
});
export default GreenBanner;
