import { NavLink as RNavLink } from 'react-router-dom';

function NavLink({ children, to = '', onMouseEnter }) {
  return (
    <RNavLink
      to={to}
      onMouseEnter={onMouseEnter}
      className="hover:underline text-black active:text-cornflower-blue font-heading font-bold text-xl rounded-lg block p-2"
    >
      {children}
    </RNavLink>
  );
}

export default NavLink;
