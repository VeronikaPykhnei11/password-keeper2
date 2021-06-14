import "./BiometricInfo.scss";
import Biometric from "../../assets/images/Biometric.gif";
import LayerImage from "../LayerImage/LayerImage";
import LayerInfo from "../LayerInfo/LayerInfo";

export default function BiometricInfo() {
  const info = {
    title: "Why Biometrics Are More Secure..",
    text:
      "Biometric adds an additional barrier to other security mechanisms,\n" +
      "            enabling “multi-factor authentication”. Their use requires the\n" +
      "            physical presence of the individual to authenticate.",
  };
  return (
    <div className="container mt-5 d-flex justify-content-center statistic-wrapper">
      <div className="row mt-5">
        <LayerImage image={Biometric} />
        <LayerInfo info={info} />
      </div>
    </div>
  );
}
