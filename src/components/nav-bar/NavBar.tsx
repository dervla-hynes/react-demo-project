import { Link, LinkProps } from '@components/link/Link';
import { NavBarLinks } from '@components/links-list/LinksList';
import * as React from 'react';
import './NavBar.scss';

type NavBarProps = {
    text: string
}

const myLinks: LinkProps[] = [
    {"name": "Home", "location" : "#home"},
    {"name": "Our Mission", "location" : "#mission"},
    {"name": "Flavours", "location" : "#flavours"},
    {"name": "Contact Us", "location" : "#contact"}
 ]

export const NavBar: React.FC<NavBarProps> = ({text}) => {
    return (
        <div id="navBar" className="nav-bar">
            <img id="logo" src="src\resources\logo.png"></img>
            <div id="spacer"></div>
            <NavBarLinks links={myLinks} />
        </div>
    )
}

NavBar.displayName = "NavBar";