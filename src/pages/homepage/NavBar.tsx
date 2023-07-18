import { FaBars } from "react-icons/fa";
import logo from "../../asset/getdp.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar fixed top-0 left-0 bg-white w-full  p-4 h-16">
      <div className="md:w-4/6 mx-auto flex justify-between">
        <div className="logo">
          <img className="h-6" src={logo} alt="logo" />
        </div>
        <div className="link-route">
          <FaBars className="text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
