type GridProps = {
    title: String,
    children: React.ReactNode,
    className?: string,
    isPending: boolean
}

const Grid = ({ title, children, isPending=false }: GridProps) => {
    if (isPending) return (<p className="text-amber-50">Loading grid...</p>)

    return (
        <div className="grid">
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default Grid