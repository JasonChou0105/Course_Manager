import { StyleSheet, View } from "react-native";
import { Header2 } from "../../Headers/DefaultHeaders/Headers";
import getBanner from "../../../HelperFunctions/getBanner";

function TileHeader({ children, banner }) {
  const Banner = getBanner(banner);
  return (
    <View style={styles.container}>
      {Banner}
      <Header2 color="#ffffff" weight="800">
        {children}
      </Header2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0040a1",
    padding: 16,
    height: 80,
  },
});

export default TileHeader;
