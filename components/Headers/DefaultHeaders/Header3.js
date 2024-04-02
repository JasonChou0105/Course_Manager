import { StyleSheet, Text, View } from "react-native";

function Header3({ children, margin, color, weight }) {
  const styles = StyleSheet.create({
    container: {
      margin: margin,
    },
    title: {
      fontSize: 16,
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

export default Header3;
