import * as React from 'react';
import './Section.scss';

type SectionProps = {
    text: string
}

export const Section: React.FC<SectionProps> = ({text}) => {

    return (
        <div id="mySection" className="section">
            <h1>{text}</h1>
        </div>
    )
}

Section.displayName = "Section";