import { useState } from "react"

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    function onNavigateNext() {
        setCurrentPage(currentPage + 1)
    }

    function onNavigatePrevious() {
        setCurrentPage(currentPage - 1)
    }

    function resetPagination() {
        setCurrentPage(1)
    }

    return {
        currentPage,
        onNavigateNext,
        onNavigatePrevious,
        resetPagination
    }
}

export default usePagination