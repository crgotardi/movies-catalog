import React from "react"
import StarIcon from '../assets/star.svg'

type ChildrenProps = {
    children: React.ReactNode
}

type CoverProps = {
    src: string
    alt: string
}

interface GenericProps<T> {
    [key: string]: T
}

const CardContainer: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="movie-card">
            {children}
        </div>
    )
}

const Cover: React.FC<CoverProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} />
}

const Title: React.FC<GenericProps<String>> = ({ title }) => {
    return <h3>{title}</h3>
}

const Rating: React.FC<GenericProps<Number>> = ({ rating }) => {
    return (
        <div className="rating">
            <img src={StarIcon} alt="rating icon (star)" />
            <p>{ `${rating}` }</p>
        </div>
    )
}

const Content: React.FC<GenericProps<String>> = ({ content }) => {
    return <span>{content}</span>
}

type CardComponent = React.FC<ChildrenProps> & {
    Cover: React.FC<CoverProps>
    Title: React.FC<GenericProps<String>>
    Rating: React.FC<GenericProps<Number>>
    Content: React.FC<GenericProps<String>>
}

const Card = CardContainer as CardComponent
Card.Cover = Cover
Card.Title = Title
Card.Rating = Rating
Card.Content = Content

export default Card