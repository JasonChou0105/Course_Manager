import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BANNERCOLORS from "../../../constants/Colors/BANNERCOLORS";
import BlueBannerSvg from "./BlueBannerSvg";

function BlueBanner() {
  return (
    <LinearGradient
      colors={[BANNERCOLORS.blue.light, BANNERCOLORS.blue.dark]}
      style={styles.background}
    >
      <BlueBannerSvg style={styles.wave} />
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
    height: "100%", // Adjust this value as needed
    bottom: 0,
  },
});
export default BlueBanner;
