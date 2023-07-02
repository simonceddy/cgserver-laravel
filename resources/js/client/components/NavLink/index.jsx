import { NavLink as RNavLink } from 'react-router-dom';

function NavLink({ children, to = '' }) {
  return (
    <RNavLink
      to={to}
      className="hover:underline text-black active:text-cornflower-blue font-heading font-bold text-xl rounded-lg block p-2"
    >
      {children}
    </RNavLink>
  );
}

export default NavLink;
