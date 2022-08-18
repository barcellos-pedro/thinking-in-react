import { useState } from "react";

import SearchBar from "./SearchBar/SearchBar";
import TweetList from "./TweetsList";
import { tweets } from '../../db.json'
import { Filters } from "../types/filters";

export function useOrder(data: any[], key: string) {
    const result = [...data]
    return result.sort((a, b) => a[key].localeCompare(b[key]))
}

function TweetsSearchResults() {
    const [search, setSearch] = useState('');
    const [inLocation, setInLocation] = useState(false)
    const filters: Filters= { search, inLocation }
    const data = useOrder(tweets, 'category')

    function handleInputChange(event: any) {
        const type = event.target.type
        type == 'search' ?
            setSearch(event.target.value) :
            setInLocation(event.target.checked)
    }

    return (
        <>
            <SearchBar
                search={search}
                inLocation={inLocation}
                onInputChange={handleInputChange} />

            <TweetList tweets={data} filters={filters} />
        </>
    )
}

export default TweetsSearchResults;
