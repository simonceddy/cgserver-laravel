function Layout({ children }) {
  return (
    <div
      id="layout-container"
      className="w-full h-full flex flex-col justify-center items-center whitespace-nowrap overflow-y-scroll bg-white text-black"
    >
      {children}
    </div>
  );
}

export default Layout;
