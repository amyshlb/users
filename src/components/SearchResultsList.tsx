import React from 'react'
import SearchResult from './SearchResult'
import './SearchResultsList.css'

export const SearchResultsList = ({ results }: { results: any[] }) => {
    return (
        <div className="results-list">
            {results.map((result, id) => (
                <SearchResult result={result} key={id} />
            ))}
        </div>
    )
}

export default SearchResultsList
