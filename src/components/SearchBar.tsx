import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import './SearchBar.css'


interface SearchBarProps {
    setResults: (results: any[]) => void
}
const SearchBar = ({ setResults }: SearchBarProps) => {
    const [input, setInput] = useState("")

    const fetchData = (value: string) => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
            .then(response => response.json())
            .then(json => {
                const results = json.filter
                    ((user: { id: number; name: string }) => user.name.toLowerCase().includes(value.toLowerCase()))
                setResults(results)
            });
    }



    const handleChange = (value: string) => {
        if (value === "") {
            setResults([])
            setInput("")
            return
        }
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <SearchIcon className='search-icon' />
            <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchBar
