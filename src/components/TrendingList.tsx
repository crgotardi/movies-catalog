type TrendingItemProps = {
    position: number,
    cover: string
}

type TrendingListProps = {
    list: TrendingItemProps[]
}

const TrendingList = ({ list }: TrendingListProps) => {
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