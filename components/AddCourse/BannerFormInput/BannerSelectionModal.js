import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, View, Animated } from "react-native";
import { Entypo } from "@expo/vector-icons";
function BannerSelectionModal({ setModalVisable }) {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 750, // 2 seconds
      useNativeDriver: false,
    }).start();
  }, [backgroundColor]);

  const fadeOut = () => {
    Animated.timing(backgroundColor, {
      toValue: 0,
      duration: 200, // 2 seconds
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
    borderRadius: "10px",
  },
  backgoundShader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BannerSelectionModal;
