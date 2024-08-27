import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../../constants/Colors/COLORS";

function Header1({ children, margin, color, weight = "400" }) {
  const styles = StyleSheet.create({
    container: {
      margin: margin,
    },
    title: {
      color: COLORS.textColor,
      fontSize: 28,
      fontWeight: weight,
      color: color,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Header1;
