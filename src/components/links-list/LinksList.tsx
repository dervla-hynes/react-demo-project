import { Link, LinkProps } from '@components/link/Link';
import * as React from 'react';
import './LinksList.scss';

type LinksListProps = {
    links: LinkProps[]
}

export const LinksList: React.FC<LinksListProps> = ({links}) => {
    return (
        <div id="linksList">
            {links.map((link, index) => {
                return <Link name={link.name} location={link.location} />
            })}
        </div>
    )
}

LinksList.displayName = "LinksList";