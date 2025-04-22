import React from "react"
import StarIcon from '@/assets/star.svg'

type ChildrenProps = {
    children: React.ReactNode
}

type CoverProps = {
    src: string
    alt: string
}

const CardContainer: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

const Cover: React.FC<CoverProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} />
}

const Title: React.FC<ChildrenProps> = ({ children }) => {
    return <h3>{children}</h3>
}

const Rating: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="rating">
            <img src={StarIcon} alt="rating icon (star)" />
            {children}
        </div>
    )
}

const Content: React.FC<ChildrenProps> = ({ children }) => {
    return <span>{children}</span>
}

type CardComponent = React.FC<ChildrenProps> & {
    Cover: React.FC<CoverProps>
    Title: React.FC<ChildrenProps>
    Rating: React.FC<ChildrenProps>
    Content: React.FC<ChildrenProps>
}

const Card = CardContainer as CardComponent
Card.Cover = Cover
Card.Title = Title
Card.Rating = Rating
Card.Content = Content

export default Card