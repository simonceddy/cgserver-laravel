function Layout({ children }) {
  return (
    <div
      id="layout-container"
      className="w-full h-full bg-white text-black whitespace-nowrap overflow-y-auto"
    >
      <div
        id="content-resize"
        className="sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto w-full min-h-full h-fit col justify-start items-center bg-cornflower-blue/20"
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
