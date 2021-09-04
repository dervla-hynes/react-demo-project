import * as React from 'react';
import { Header } from '@components/header/Header';
import { NavBar } from '@components/nav-bar/NavBar';
import { Section } from '@components/section/Section';
import './App.scss';
import { Footer } from '@components/footer/Footer';

export const App = () => {
    return (
    <div id="app">
        <NavBar text="Home" />
        <Header text="When it comes to cookies, we've got it covered..." />
        <Section text="Our Mission" />
        <Section text="Flavours" />
        <Section text="Contact Us" />
        <Footer text="Footer"/>
    </div>
    )
}

App.displayName = "App";