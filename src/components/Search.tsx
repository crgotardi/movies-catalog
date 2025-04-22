import { useState, memo } from "react"
import searchIcon from '@assets/search.svg'

type searchProps = {
    placeholder: string,
    handleSearch: (query: string) => void,
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'onKeyDown' | 'value' | 'type'>

const Search = ({ placeholder="Search", handleSearch }: searchProps) => {
    const [query, setQuery] = useState('')

    function search(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            handleSearch(query)
        }
    }
    
    return (
        <div className="search flex">
            <img src={searchIcon} alt="search" />
            <input
                type="search" 
                placeholder={placeholder} 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={search}
            />
        </div>
    )
}

export default memo(Search)