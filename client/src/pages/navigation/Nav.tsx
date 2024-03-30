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
        <p>Tiny Heart Health</p>
      </a>
      <div className="nav-side">
        <a onClick={() => navigate(Routes.ANALYZE)}> Analyze</a>
      </div>
    </div>
  );
}

export default Nav;
