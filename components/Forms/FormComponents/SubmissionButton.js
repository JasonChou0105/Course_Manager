import { StyleSheet, Text, Pressable } from "react-native";
import COLORS from "../../../constants/Colors/COLORS";

function SubmissionButton({ submitHandle, title }) {
  return (
    <Pressable style={styles.container} onPress={submitHandle}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 8,
    marginTop: 16,
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.buttonColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default SubmissionButton;
