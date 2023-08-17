function Header({ children }) {
  return (
    <header
      id="header-container"
      className="w-full h-[25%] min-h-[25%] col justify-center items-center mb-2 border-2 rounded-lg border-dandelion"
    >
      {children}
    </header>
  );
}

export default Header;
