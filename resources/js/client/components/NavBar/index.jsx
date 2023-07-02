function NavBar({ children }) {
  return (
    <div
      id="navbar-container"
      className="w-full md:w-4/5 lg:w-3/4 row justify-around items-center rounded-lg font-sans"
    >
      {children}
    </div>
  );
}

export default NavBar;
