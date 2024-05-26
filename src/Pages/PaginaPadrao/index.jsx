import { Link, Outlet } from "react-router-dom";
import logo from '../../../public/images/logo.png';

const PaginaPadrao = () => {
  return (
    <div className="bg-gradient2 pt-4 pb-6 h-screen">
      <header className="  lg:ml-11">
        <Link to="/login"><img className="h-custom mx-auto lg:ml-0" src={logo} alt="Logo" /></Link>
      </header>
      <Outlet />
    </div>
  );
};

export default PaginaPadrao;
