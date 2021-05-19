import React from 'react';
import { Link, LinkGetProps, LinkProps } from '@reach/router';
import classNames from 'classnames/bind';

import styles from './NavLink.module.scss';

const cx = classNames.bind(styles);

function isActive({ isCurrent }: LinkGetProps): object {
  const className = cx({
    navLink: true,
    navLinkActive: isCurrent
  });
  return { className };
}

type AppLinkProps = React.PropsWithoutRef<LinkProps<any>> & React.RefAttributes<HTMLAnchorElement>;

export const NavLink: React.FC<AppLinkProps> = (props) => {
  return (
    <Link {...props} getProps={isActive} />
  );
};
