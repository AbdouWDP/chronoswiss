import { Link } from "react-router-dom";

function HeaderLogo() {
  return (
    <div className="header_logo w-1/5">
      <Link to="/">
        <img
          src="https://static.chrono24.com/images/default/logo-positive-reduced.svg"
          alt=""
          className="h-4/5 w-3/4 object-contain"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
