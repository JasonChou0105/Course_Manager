import { StyleSheet, TextInput, View } from "react-native";
import Header3 from "../Headers/Header3";

function FormInput({ placeholder, title }) {
  return (
    <View style={styles.container}>
      <Header3>{title}</Header3>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={"#989898a3"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 8,
  },
  textInputContainer: {
    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    width: "100%",
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
  textInput: {
    fontSize: 16,
  },
});

export default FormInput;
