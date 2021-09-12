import * as React from 'react';
import './Card.scss';

export type CardProps = {
    title: string,
    content: string,
    imageUrl?: string
}

export const Card: React.FC<CardProps> = ({title, content, imageUrl}) => {

    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <img src={imageUrl} alt={title} />
            <p className="card-desc">{content}</p>
        </div>
    )
}

Card.displayName = "Card";