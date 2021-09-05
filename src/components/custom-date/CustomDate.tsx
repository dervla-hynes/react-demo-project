import * as React from 'react';
import './CustomDate.scss';

export const CustomDate: React.FC = () => {
    const [date, setDate] = React.useState("");

    const getDate = () => {
        let myDate = new Date();
        switch (myDate.getDay()) {
            case 5:
                myDate.setDate(myDate.getDate() + 3);
                break;
            case 6:
                myDate.setDate(myDate.getDate() + 2);
                break;
            default:
                myDate.setDate(myDate.getDate() + 1);
                break;
        }
        setDate(myDate.toDateString());
    }

    return (
        <div id="customDate">
            <p>{date}</p>
            <button onClick={getDate}>Get Next Delivery Date</button>
        </div>
    )
}

CustomDate.displayName = "CustomDate";