import SearchInput from "./SearchInput";
import AuthBtn from "./AuthBtn";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./Navigation/HeaderNavigation";

function Navbar() {
  return (
    <>
      <header className="w-screen h-24">
        <div className="w-[90%] h-full m-auto flex justify-between items-center">
          <HeaderLogo />
          <SearchInput />
          <AuthBtn />
        </div>
      </header>
      <HeaderNavigation />
    </>
  );
}

export default Navbar;
