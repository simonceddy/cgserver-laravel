import {
  NavLink, useLocation, useOutlet
} from 'react-router-dom';
import routes from './routes';

function App() {
  const location = useLocation();
  const outlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="w-full h-fit min-h-full col justify-start items-center bg-white text-black font-sans">
      <div className="row">
        {routes.map(({ path, label }) => (label ? (
          <NavLink
            className="mx-2 my-1 p-1 text-cornflower-blue font-bold text-3xl font-cursive hover:underline"
            key={`nav-link-${path}`}
            to={path}
          >
            {label}
          </NavLink>
        ) : null))}
        <a
          className="mx-2 my-1 p-1 text-cornflower-blue font-bold text-3xl font-cursive hover:underline"
          href="/logout"
        >
          Logout
        </a>
      </div>
      <div className="col justify-start items-center flex-1 w-full md:w-4/5 xl:w-2/3 relative border-2 rounded-md border-cornflower-blue">
        <div ref={nodeRef} className="page flex-1 col justify-start items-center">
          {outlet}
        </div>
      </div>
    </div>
  );
}

export default App;
