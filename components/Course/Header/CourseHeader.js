import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Header1 } from "../../Headers/DefaultHeaders/Headers";
import AverageContainer from "./AverageHeader";
import OrangeBanner from "../../../assets/banners/Orange/OrangeBanner";
import BoxShadowIos from "../../Backgrounds/BoxShadowIos";
import BlueBanner from "../../../assets/banners/Blue/BlueBanner";
import PurpleBanner from "../../../assets/banners/Purple/PurpleBanner";
import getBanner from "../../../HelperFunctions/getBanner";

function CourseHeader({ name, description, average, banner }) {
  const Banner = getBanner(banner);

  return (
    <BoxShadowIos opacity={1}>
      <View style={styles.container}>
        {Banner}
        <View style={styles.titleContainer}>
          <Header1 color="#ffffff" weight="800">
            {name}
          </Header1>
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
