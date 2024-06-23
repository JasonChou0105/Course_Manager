import { StyleSheet, TextInput, View, Text } from "react-native";
import COLORS from "../../constants/Colors/COLORS";

function FormInput({ placeholder, title, setHandle, value, setValid }) {
  function onChangeHandle(text) {
    setHandle(text);
    setValid(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeHandle}
          placeholderTextColor={"#989898a3"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  title: {
    color: COLORS.highlight,
    fontSize: 12,
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  textInput: {
    fontSize: 16,
  },
});

export default FormInput;
