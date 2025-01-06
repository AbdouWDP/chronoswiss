import { Link } from "react-router-dom";
import { SlUser } from "react-icons/sl";

function AuthBtn() {
  return (
    <div className="auth_btn w-1/5 h-full flex items-center">
      <Link to="/login">
        <div className="w-full h-fit flex gap-2 items-center justify-end hover:text-blue-400">
          <div className="user_icon">
            <span>
              <SlUser />
            </span>
          </div>
          <div>
            <p>Se connecter ou s&apos;inscrire</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AuthBtn;
