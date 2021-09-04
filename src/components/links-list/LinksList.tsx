import { Link, LinkProps } from '@components/link/Link';
import * as React from 'react';
import './LinksList.scss';

type NavBarLinksProps = {
    links: LinkProps[]
}

export const NavBarLinks: React.FC<NavBarLinksProps> = ({links}) => {
    return (
        <div id="linksList">
            {links.map((link, index) => {
                return <Link name={link.name} location={link.location} />
            })}
        </div>
    )
}

NavBarLinks.displayName = "LinksList";