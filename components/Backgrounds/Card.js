import { StyleSheet, View } from "react-native";
import BoxShadowIos from "./BoxShadowIos";
import COLORS from "../../constants/Colors/COLORS";

function Card({
  children,
  shadowOpacity = 0.3,
  alignItems = "none",
  justifyContent = "none",
}) {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 12,
      marginVertical: 4,
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.border,
      backgroundColor: "#ffffff",
      elevation: shadowOpacity * 4,
      justifyContent: justifyContent,
      alignItems: alignItems,
    },
  });

  return (
    <BoxShadowIos opacity={shadowOpacity}>
      <View style={styles.container}>{children}</View>
    </BoxShadowIos>
  );
}

export default Card;
