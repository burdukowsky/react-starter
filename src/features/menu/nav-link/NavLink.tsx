import React from 'react';
import { Link, LinkGetProps, LinkProps } from '@reach/router';
import classNames from 'classnames/bind';

import './NavLink.less';

function isActive({ isCurrent }: LinkGetProps): object {
  const className = classNames({
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
