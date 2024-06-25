import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, View, Animated } from "react-native";
import { Entypo } from "@expo/vector-icons";
import BannerSelectionOption from "./BannerSelectionOption";
import BlueBanner from "../../../../assets/banners/Blue/BlueBanner";
import OrangeBanner from "../../../../assets/banners/Orange/OrangeBanner";
import PurpleBanner from "../../../../assets/banners/Purple/PurpleBanner";
import GreenBanner from "../../../../assets/banners/Green/GreenBanner";

function BannerSelectionModal({ setModalVisable }) {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 750,
      useNativeDriver: false,
    }).start();
  }, [backgroundColor]);

  const fadeOut = () => {
    Animated.timing(backgroundColor, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setModalVisable(false);
    });
  };
  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.37)"],
  });

  const animatedStyle = {
    backgroundColor: backgroundColorInterpolation,
  };

  return (
    <Animated.View style={[styles.backgoundShader, animatedStyle]}>
      <View style={styles.container}>
        <Pressable onPress={fadeOut}>
          <Entypo name="cross" size={24} color="black" />
        </Pressable>
        <BannerSelectionOption banner={<BlueBanner />} />
        <BannerSelectionOption banner={<OrangeBanner />} />
        <BannerSelectionOption banner={<PurpleBanner />} />
        <BannerSelectionOption banner={<GreenBanner />} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 64,
    marginHorizontal: 24,
    height: "85%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
  },
  backgoundShader: {
    position: "absolute",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BannerSelectionModal;
