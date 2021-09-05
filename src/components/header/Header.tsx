import { CustomDate } from '@components/custom-date/CustomDate';
import * as React from 'react';
import './Header.scss';

type HeaderProps = {
    text: string
}

export const Header: React.FC<HeaderProps> = ({text}) => {
    React.useEffect(() => {
        // alert(document.querySelector("#header"));
    });

    return (
        <div id="header" className="primary-header">
            <div id="background"></div>
            <div id="content">
                <h1>{text}</h1>
                <p>Our flavours change every week, why not try out a fresh box today?</p>
                <CustomDate />
            </div>
        </div>
    )
}

Header.displayName = "Header";