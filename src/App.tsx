import * as React from 'react';
import { Header } from '@components/header/Header';
import { NavBar } from '@components/nav-bar/NavBar';
import { MissionSection } from '@components/sections/mission-section/MissionSection';
import { ContactSection } from '@components/sections/contact-section/ContactSection';
import { FlavoursSection } from '@components/sections/flavours-section/FlavoursSection';
import './App.scss';
import { Footer } from '@components/footer/Footer';


export const App = () => {
    return (
    <div id="app">
        <NavBar text="Home" />
        <Header text="When it comes to cookies, we've got it covered..." />
        <MissionSection text="Our Mission" />
        <FlavoursSection text="Flavours" />
        <ContactSection text="Contact Us" />
        <Footer text="Footer" />
    </div>
    )
}

App.displayName = "App";