import * as React from 'react';

type FruitLoopsProps = {
    fruit: Array<string>
}

export const FruitLoops: React.FC<FruitLoopsProps> = ({fruit}) => {

    return (
        <ul>
            {fruit.map((value, index) => {
                return <li key={index} style={{color: value}}>{value}</li>
            })}
        </ul>
    )
}

FruitLoops.displayName = "FruitLoops"