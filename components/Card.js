import { StyleSheet, View } from "react-native";

function Card({
  children,
  alignItems = "none",
  justifyContent = "none",
  onPress = () => {},
}) {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 12,
      marginVertical: 4,
      padding: 16,
      borderRadius: 8,
      backgroundColor: "#ffffff",
      elevation: 0.2,
      justifyContent: justifyContent,
      alignItems: alignItems,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  });

  return <View style={styles.container}>{children}</View>;
}

export default Card;
