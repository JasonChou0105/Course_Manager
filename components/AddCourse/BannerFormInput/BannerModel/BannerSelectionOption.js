import React from "react";
import { StyleSheet, Text, View } from "react-native";

function BannerSelectionOption({ banner }) {
  return (
    <View style={styles.bannerDisplayContainer}>
      {banner}
      <Text>hi</Text>
    </View>
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
