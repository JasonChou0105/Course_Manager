import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Header1 from "../../Headers/Header1";
import AverageContainer from "./AverageHeader";

function CourseHeader({ name, description, average }) {
  return (
    <ImageBackground
      source={require("../../../assets/banners/math.png")}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Header1 color="#ffffff">{name}</Header1>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.averageContainer}>
        <AverageContainer>{average}</AverageContainer>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 42,
    marginBottom: 16,
    padding: 4,
    borderRadius: 16,
    alignSelf: "center",
    overflow: "hidden",
    elevation: 8,
  },
  descriptionText: {
    color: "#ffffff",
  },
  titleContainer: {
    justifyContent: "center",
    width: "50%",
    margin: 20,
  },
  averageContainer: {
    width: "50%",
    alignItems: "flex-end",
  },
});

export default CourseHeader;
