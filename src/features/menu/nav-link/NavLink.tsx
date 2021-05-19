import { Link, LinkGetProps, LinkProps } from '@reach/router';
import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './NavLink.module.scss';

const cx = classNames.bind(styles);

type AppLinkProps = React.PropsWithoutRef<LinkProps<any>> & React.RefAttributes<HTMLAnchorElement>;

function isActive({ isCurrent }: LinkGetProps): object {
  const className = cx({
    navLink: true,
    navLinkActive: isCurrent
  });
  return { className };
}

export default function NavLink(props: AppLinkProps): JSX.Element {
  return (
    <Link {...props} getProps={isActive} />
  );
}
