import Slider from "react-infinite-logo-slider";
import logo from "../../../public/logo.png";
import logo1 from "../../../public/2.svg";
import logo2 from "../../../public/3.svg";
import logo3 from "../../../public/4.svg";
import logo4 from "../../../public/6.svg";

const Carousal = () => {
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      <Slider.Slide>
        <img src={logo1} alt="any" className="w-35" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo2} alt="any" className="w-35" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo3} alt="any" className="w-35" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo4} alt="any" className="w-35ab" />
      </Slider.Slide>
    </Slider>
  );
};

export default Carousal;
