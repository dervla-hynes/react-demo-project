import { Card, CardProps } from '@components/card/Card';
import * as React from 'react';
import './FlavoursSection.scss';

type FlavoursSectionProps = {
    text: string
}

const flavours: CardProps[] = [
    {"title": "Chocolate Chip", "content" : "The classic chunky chocolate chip cookie", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "Sugar Cookie", "content" : "Buttery sugar cookie with extra sugar on top", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "Strawberry Shortcake", "content" : "Freeze-dried strawberry pieces with chunks of shortcake", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "Triple Chocolate", "content" : "Milk, dark and white chocolate chips", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "Salted Caramel", "content" : "Sea salt flakes with melted caramel swirls", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "White Chocolate & Matcha", "content" : "Matcha flavoured cookie with white chocolate chips", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "Chocolate Brownie", "content" : "Chocolate cookie with brownie pieces", "imageUrl" : "./resources/choc-cookie.png"},
    {"title": "Coconut", "content" : "Coconut flakes in a classic cookie", "imageUrl" : "./resources/choc-cookie.png"}
 ]

export const FlavoursSection: React.FC<FlavoursSectionProps> = ({text}) => {

    return (
        <div id="flavoursSection">
            <h1>{text}</h1>
            <div className="flavours">
                {flavours.map(f => {
                    return <Card title={f.title} content={f.content} imageUrl={f.imageUrl}/>
                })}
            </div>
        </div>
    )
}

FlavoursSection.displayName = "FlavoursSection";