import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Header1 from "../../Headers/Header1";
import AverageContainer from "./AverageHeader";
import OrangeBanner from "../../../assets/banners/OrangeBanner";
import BoxShadowIos from "../../Backgrounds/BoxShadowIos";

function CourseHeader({ name, description, average }) {
  return (
    <BoxShadowIos opacity={1}>
      <View style={styles.container}>
        <OrangeBanner />
        <View style={styles.titleContainer}>
          <Header1 color="#ffffff">{name}</Header1>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.averageContainer}>
          <AverageContainer>{average}</AverageContainer>
        </View>
      </View>
    </BoxShadowIos>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: 32,
    marginVertical: 4,
    padding: 4,
    borderRadius: 8,
    alignSelf: "center",
    height: 130,
    elevation: 2,
    overflow: "hidden",
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
