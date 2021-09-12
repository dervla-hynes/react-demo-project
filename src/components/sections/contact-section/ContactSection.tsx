import * as React from 'react';
import './ContactSection.scss';

type ContactSectionProps = {
    text: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({text}) => {

    return (
        <div id="contactSection">
            <h1>{text}</h1>
        </div>
    )
}

ContactSection.displayName = "ContactSection";