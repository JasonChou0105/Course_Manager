import { Pressable, StyleSheet, Text, View } from "react-native";
import { Header1 } from "../../Headers/DefaultHeaders/Headers";
import AverageContainer from "./AverageHeader";
import getBanner from "../../../HelperFunctions/getBanner";

function CourseHeader({ name, description, average, banner }) {
  const Banner = getBanner(banner);

  return (
    <Pressable style={styles.boxShadowIos}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: 32,
    marginBottom: 4,
    marginTop: 8,
    padding: 4,
    borderRadius: 8,
    alignSelf: "center",
    height: 130,
    elevation: 2,
    overflow: "hidden",
  },
  boxShadowIos: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  descriptionText: {
    color: "#ffffff",
  },
  titleContainer: {
    justifyContent: "center",
    width: "50%",
    margin: 20,
    marginTop: 30,
  },
  averageContainer: {
    width: "50%",
    alignItems: "flex-end",
  },
});

export default CourseHeader;
