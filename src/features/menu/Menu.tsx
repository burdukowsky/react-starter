import NavLink from './nav-link/NavLink';

export default function Menu(): JSX.Element {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='demo'>Dashboard</NavLink>
    </nav>
  );
}
