import BlueBanner from "../assets/banners/Blue/BlueBanner";
import GreenBanner from "../assets/banners/Green/GreenBanner";
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
  } else if (banner == "green") {
    res = <GreenBanner />;
  }
  return res;
}

export default getBanner;
