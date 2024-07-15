import { StyleSheet, Text, Pressable, View } from "react-native";
import COLORS from "../../../constants/Colors/COLORS";

function SubmissionButton({ submitHandle, title }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.container} onPress={submitHandle}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 8,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: COLORS.buttonColor,
    justifyContent: "center",
    alignItems: "center",
  },
  rootContainer: {
    width: "100%",
  },
  text: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default SubmissionButton;
