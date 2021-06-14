import "./CompanyInfo.scss";
import Man from "../../assets/images/Man.gif";
import LayerImage from "../LayerImage/LayerImage";
import LayerInfo from "../LayerInfo/LayerInfo";

export default function CompanyInfo() {
  const info = {
    title: "CRACK_IT is more than a program...",
    text:
      "You will be able to store all your passwords in one place under a\n" +
      "            secure lock. Biometric check and master password allow enabling safe\n" +
      "            access to your data. Saves your time when creates various passwords\n" +
      "            given the necessary demands.",
  };
  return (
    <div className="container mt-5 d-flex justify-content-center statistic-wrapper">
      <div className="row mt-5">
        <LayerInfo info={info} />
        <LayerImage image={Man} />
      </div>
    </div>
  );
}
