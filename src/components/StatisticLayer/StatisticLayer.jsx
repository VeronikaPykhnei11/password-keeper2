import "./StatisticLayer.scss";
import GirlImage from "../../assets/images/StatisticGirl.gif";
import LayerImage from "../LayerImage/LayerImage";
import LayerInfo from "../LayerInfo/LayerInfo";

export default function StatisticLayer() {
  const info = {
    title: "Nearly 8 in 10 Users Forget Their Passwords and Require a Reset...",
    text:
      "Passwords are the dominant way online services manage access to our\n" +
      "            personal and work-related lives. But oftentimes, they are more of a\n" +
      "            headache than a security tool.",
  };
  return (
    <div className="container mt-5 d-flex justify-content-center statistic-wrapper">
      <div className="row mt-5">
        <LayerImage image={GirlImage} />
        <LayerInfo info={info} />
      </div>
    </div>
  );
}
