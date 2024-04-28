import { ImageBackground, StyleSheet, Text, View } from "react-native";
import OrangeBanner from "../../../assets/banners/Orange/OrangeBanner";
import { Header2 } from "../../Headers/DefaultHeaders/Headers";
import BlueBanner from "../../../assets/banners/Blue/BlueBanner";
import PurpleBanner from "../../../assets/banners/Purple/PurpleBanner";
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
