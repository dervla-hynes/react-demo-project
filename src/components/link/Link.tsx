import * as React from 'react';
import './Link.scss';

export type LinkProps = {
    name: string,
    location: string
}

export const Link: React.FC<LinkProps> = ({name, location}) => {
    return (
        <div id="link">
            <a className="" href={location}>{name}</a>
        </div>
    )
}

Link.displayName = "Link";