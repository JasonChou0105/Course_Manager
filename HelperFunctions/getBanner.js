import BlueBanner from "../assets/banners/Blue/BlueBanner";
import OrangeBanner from "../assets/banners/Orange/OrangeBanner";
import PurpleBanner from "../assets/banners/Purple/PurpleBanner";

function getBanner(banner) {
  var res;
  if (banner == "blue") {
    res = <BlueBanner />;
  } else if (banner == "orange") {
    res = <OrangeBanner />;
  } else if (banner == "purple") {
    res = <PurpleBanner />;
  }
  return res;
}

export default getBanner;
