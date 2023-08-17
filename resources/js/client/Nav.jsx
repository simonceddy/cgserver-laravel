import { pagesAPI } from './app/pagesApi';
import NavBar from './components/NavBar';
import NavLink from './components/NavLink';
import routes from './routes';

function Nav() {
  const prefetchPage = pagesAPI.usePrefetch('fetchPage');
  return (
    <NavBar>
      {routes.map(({
        key, path, label, slug
      }) => (
        <NavLink
          onMouseEnter={() => prefetchPage({ slug }, { ifOlderThan: 600 })}
          to={path}
          key={key}
        >
          {label}
        </NavLink>
      ))}
      <a href="https://www.basscoastpost.com/christine-grayden" className="hover:underline text-black active:text-cornflower-blue dark:text-dandelion font-heading font-bold text-xl rounded-lg block p-2">
        Blog
      </a>
    </NavBar>
  );
}

export default Nav;
