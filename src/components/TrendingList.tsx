import { Suspense } from 'react'

type TrendingItemProps = {
    position: number,
    cover: string
}

type TrendingListProps = {
    list: TrendingItemProps[],
}

const TrendingList = ({ list }: TrendingListProps) => {
    return (
        <div className="trending">
            <h2>Trending</h2>
            <Suspense fallback={<TrendingSkeleton />}>
                <ul>
                    {list.map((item) => (
                        <li key={item.position}>
                            <p>{item.position}</p>
                            <img src={item.cover} alt="movie" />
                        </li>
                    ))}
                </ul>
            </Suspense>
        </div>
    )
}

const TrendingSkeleton = ({elements = 5}) => {
    return (
        <ul className="flex animate-pulse justify-center">
            {Array.from({length: elements}).map((_, index) => ( 
                <li key={index}>
                    <p>{index + 1}</p>
                    <div className="w-[120px] h-[160px] rounded-2xl bg-gray-900"></div>
                </li>
            ))}
        </ul>
    )
}

export default TrendingList