import NavBar from './components/NavBar';
import NavLink from './components/NavLink';
import routes from './routes';

function Nav() {
  return (
    <NavBar>
      {routes.map(({ key, path, label }) => (
        <NavLink to={path} key={key}>{label}</NavLink>
      ))}
    </NavBar>
  );
}

export default Nav;
