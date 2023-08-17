function Layout({ children }) {
  return (
    <div
      id="layout-container"
      className="w-full min-h-full flex flex-col justify-center items-center whitespace-nowrap overflow-y-scroll bg-white dark:bg-black dark:text-aqua-spring text-black"
    >
      {children}
    </div>
  );
}

export default Layout;
