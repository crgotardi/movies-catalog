type TrendingItemProps = {
    position: number,
    cover: string
}

type TrendingListProps = {
    list: TrendingItemProps[],
    isPending: boolean,
}

const TrendingList = ({ list, isPending=false }: TrendingListProps) => {
    if (isPending) return (<p className="text-amber-50">Loading trending...</p>)

    return (
        <div className="trending">
            <h2>Trending</h2>
            <ul>
                {list.map((item) => (
                    <li key={item.position}>
                        <p>{item.position}</p>
                        <img src={item.cover} alt="movie" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TrendingList