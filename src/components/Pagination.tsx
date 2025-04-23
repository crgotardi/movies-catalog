import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
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
            <Button size="sm" disabled={!hasPrevious} onClick={onNavigatePrevious}>
                <ArrowLeftIcon />
            </Button>
            <span className="text-white">{currentPage}</span>
            <Button size="sm" disabled={!hasNext} onClick={onNavigateNext}>
                <ArrowRightIcon />
            </Button>
        </div>
    )
}

export default Pagination