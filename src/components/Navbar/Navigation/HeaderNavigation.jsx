function NavigationButton({ text, key }) {
  return (
    <div
      key={key}
      className="navgation_btn w-fit h-full px-8 shrink-0 flex gap-1 items-center"
    >
      <button className="hover:text-blue-400">
        <p>{text}</p>
      </button>
    </div>
  );
}

function HeaderNavigation() {
  const navBtnsArray = [
    {
      text: "Acheter une montre",
      link: "",
    },
    {
      text: "Vendre une montre",
      link: "",
    },
    {
      text: "Magazine",
      link: "",
    },
    {
      text: "Watch Collection",
      link: "",
    },
  ];

  return (
    <header className="w-screen h-10">
      <div className="nav_btns_container w-[90%] h-full m-auto flex overflow-scroll">
        {navBtnsArray.map((btn, index) => (
          <NavigationButton text={btn.text} key={index} />
        ))}
      </div>
    </header>
  );
}

export default HeaderNavigation;
