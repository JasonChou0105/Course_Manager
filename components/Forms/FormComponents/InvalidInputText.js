import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../../constants/Colors/COLORS";

function InvalidInputText({ children }) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={20} color={COLORS.errorColor} />
      <Text style={styles.text}> {children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.errorColor,
    fontSize: 14,
    textAlign: "center",
  },
});
export default InvalidInputText;
