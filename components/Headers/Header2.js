import { StyleSheet, Text, View } from "react-native";

function Header2({ children, margin, color }) {
  const styles = StyleSheet.create({
    container: {
      margin: margin,
    },
    title: {
      fontSize: 20,
      color: color,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Header2;
