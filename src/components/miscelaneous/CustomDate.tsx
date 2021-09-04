import * as React from 'react';

export const CustomDate: React.FC = () => {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");

    const getDate = () => {
        setDate(new Date().toDateString());
    }

    const getTime = () => {
        setTime(new Date().toTimeString());
    }

    return (
        <div>
            {date}
            <button onClick={getDate}>Get the Date</button>
            {time}
            <button onClick={getTime}>Get the Time</button>
        </div>
    )
}

CustomDate.displayName = "CustomDate";