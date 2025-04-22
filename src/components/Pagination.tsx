import React from "react"
import Button from "./Button"

export type PaginationProps = {
    hasPrevious?: boolean,
    hasNext?: boolean,
    currentPage: number,
    onNavigateNext: () => void,
    onNavigatePrevious: () => void    
}

const Pagination: React.FC<PaginationProps> = ({ hasPrevious, hasNext, currentPage, onNavigateNext, onNavigatePrevious }) => {
    return (
        <div className="flex gap-4 justify-center items-center">
            <Button disabled={!hasPrevious} onClick={onNavigatePrevious}>Prev</Button>
            <span className="text-white">{currentPage}</span>
            <Button disabled={!hasNext} onClick={onNavigateNext}>Next</Button>
        </div>
    )
}

export default Pagination