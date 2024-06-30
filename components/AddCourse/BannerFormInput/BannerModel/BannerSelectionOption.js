import React from "react";
import { Pressable, StyleSheet } from "react-native";

function BannerSelectionOption({ banner, setBanner }) {
  return (
    <Pressable onPress={setBanner} style={styles.bannerDisplayContainer}>
      {banner}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bannerDisplayContainer: {
    height: 90,
    overflow: "hidden",
    borderRadius: 8,
    margin: 4,
  },
});

export default BannerSelectionOption;
