import { useNavigate } from "react-router-dom";
import "./nav.css";
import { Routes } from "../../utils/routes";

function Nav() {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <a className="nav-logo-group" href="/">
        <img
          className="nav-logo"
          src="../../../public/tiny-heart-logo.png"
        ></img>
        <p className="nav-logo-text">Tiny Heart</p>
      </a>
      <div className="nav-side">
        <a onClick={() => navigate(Routes.ANALYZE)}> Analyze</a>
        {/* <a onClick={() => navigate(Routes.SIGN_IN)}> Login</a> */}
      </div>
    </div>
  );
}

export default Nav;
