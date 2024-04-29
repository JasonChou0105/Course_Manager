import { View, StyleSheet } from "react-native";

function BoxShadowIos({ children, opacity = 0.3 }) {
  const styles = StyleSheet.create({
    boxShadowIos: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: opacity / 2,
      shadowRadius: 6,
    },
  });
  return <View style={styles.boxShadowIos}>{children}</View>;
}

export default BoxShadowIos;
