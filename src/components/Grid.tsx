import Pagination, { PaginationProps } from "./Pagination"

type GridProps = {
    title: String,
    children: React.ReactNode,
    className?: string,
    isLoading?: boolean
    paginationProps: PaginationProps
}

const Grid = ({ title, children, isLoading=false, paginationProps }: GridProps) => {
    return (
        <div className="grid">
            <h2>{title}</h2>
            { isLoading ? 
                <GridSkeleton /> : 
                <ul>{children}</ul> 
            }
            <Pagination {...paginationProps} />
        </div>
    )
}

const GridSkeleton = ({ elements = 4 }) => {
    return (
        <ul>
            { Array.from({ length: elements }).map((_, index) => (
                <li key={index}>
                    <div className="mx-auto w-full max-w-sm p-4 card h-[400px]">
                        <div className="flex flex-col animate-pulse">
                            <div className="flex-2 space-y-6 py-1">
                                <div className="h-[300px] rounded-2xl bg-gray-900"></div>
                            </div>
                            <div className="flex-2 space-y-6 py-1">
                                <div className="h-[24px] rounded-2xl bg-gray-900"></div>
                            </div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-[24px] rounded-2xl bg-gray-900"></div>
                            </div>
                        </div>
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default Grid