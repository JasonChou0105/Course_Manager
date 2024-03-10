import { StyleSheet, Text, View } from "react-native";

function Header({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
  },
  title: {
    fontSize: 20,
  },
});

export default Header;
