import "./App.css";
import MainPage from "./views/MainPage/MainPage";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignUp from "./views/SignUp/SignUp";
import SignIn from "./views/SignIn/SignIn";
import UserProfile from "./views/UserProfile/UserProfile";

function App() {
  return (
    <div className="App container-fluid d-flex justify-content-center align-content-center">
      <Route exact path="/" component={MainPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/userProfile" component={UserProfile} />
    </div>
  );
}

export default App;
