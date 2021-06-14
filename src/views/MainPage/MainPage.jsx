import "./MainPage.scss";
import Header from "../../components/Header/Header";
import HeaderMainTitle from "../../components/HeaderMainTitle/HeaderMainTitle";
import FirstDialog from "../../components/FirstDialog/FirstDialog";
import arrow from "../../assets/images/down-arrow.svg";
import StatisticLayer from "../../components/StatisticLayer/StatisticLayer";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import BiometricInfo from "../../components/BiometricInfo/BiometricInfo";
import SaveTimeLayer from "../../components/SaveTimeLayer/SaveTimeLayer";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  return (
    <div>
      <Header />
      <HeaderMainTitle />
      <div className="container d-flex justify-content-center mt-5 col-md-3">
        <button className="btn btn-light try-free-button d-flex align-items-center justify-content-center p-3 col-12">
          Try For Free
        </button>
      </div>
      <FirstDialog />
      <div className="container d-flex justify-content-center mt-5">
        <button className="btn continue-button p-3 rounded-pill d-flex justify-content-evenly align-items-center">
          <img src={arrow} /> Continue
        </button>
      </div>
      <StatisticLayer />
      <CompanyInfo />
      <BiometricInfo />
      <SaveTimeLayer />
      <Footer />
    </div>
  );
}
