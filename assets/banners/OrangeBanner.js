import { StyleSheet, View } from "react-native";
import OrangeBannerSvg from "./svgs/OrangeBannerSvg";
import { LinearGradient } from "expo-linear-gradient";

function OrangeBanner() {
  return (
    <LinearGradient colors={["#d63600", "#d65900"]} style={styles.background}>
      <OrangeBannerSvg style={styles.wave} />
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
  },
});
export default OrangeBanner;
