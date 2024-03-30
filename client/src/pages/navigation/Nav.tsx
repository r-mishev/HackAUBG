import { useNavigate } from "react-router-dom";
import "./nav.css";
import { Routes } from "../../utils/routes";

function Nav() {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <a href="/">
        <img
          className="nav-logo"
          src="../../../public/tiny-heart-logo.png"
        ></img>
      </a>
      <div className="nav-side">
        <a onClick={() => navigate(Routes.SOLUTIONS)}>Solutions</a> |
        <a onClick={() => navigate(Routes.ANALYZE)}> Analyze</a>
      </div>
    </div>
  );
}

export default Nav;
