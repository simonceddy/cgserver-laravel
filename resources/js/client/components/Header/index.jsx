function Header({ children }) {
  return (
    <header
      id="header-container"
      className="w-full h-[25%] sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 col justify-center items-center mb-2 border-2 rounded-lg border-dandelion"
    >
      {children}
    </header>
  );
}

export default Header;
