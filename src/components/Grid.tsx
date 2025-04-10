type GridProps = {
    title: String,
    children: React.ReactNode,
    className?: string;
}


const Grid = ({ title, children }: GridProps) => {
    return (
        <div className="all-movies">
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default Grid