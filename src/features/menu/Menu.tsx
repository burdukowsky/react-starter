import { Link } from '@reach/router';

export default function Menu(): JSX.Element {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='demo'>Dashboard</Link>
    </nav>
  );
}
