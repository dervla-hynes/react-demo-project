import * as React from 'react';
import './MissionSection.scss';

type MissionSectionProps = {
    text: string
}

export const MissionSection: React.FC<MissionSectionProps> = ({text}) => {

    return (
        <div id="missionSection">
            <h1>{text}</h1>
        </div>
    )
}

MissionSection.displayName = "MissionSection";