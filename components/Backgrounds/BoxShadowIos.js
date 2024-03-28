import { View, StyleSheet } from "react-native";

function BoxShadowIos({ children, opacity = 0.3 }) {
  return <View style={styles.boxShadowIos}>{children}</View>;
}
const styles = StyleSheet.create({
  boxShadowIos: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default BoxShadowIos;
