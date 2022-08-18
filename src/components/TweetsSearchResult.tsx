import { useState } from 'react'

import SearchBar from './SearchBar/SearchBar'
import TweetsList from './TweetsList'
import { tweets } from '../../db.json'
import { Filters } from '../types/filters'
import { Tweet } from '../types/tweet'
import { useOrderTweets } from '../hooks/UseOrderTweets'

function TweetsSearchResults() {
  const [search, setSearch] = useState('')
  const [inLocation, setInLocation] = useState(false)
  const filters: Filters = { search, inLocation }
  const data = useOrderTweets<Tweet>(tweets, 'category')

  function handleInputChange(event: any) {
    const type = event.target.type
    type == 'search'
      ? setSearch(event.target.value)
      : setInLocation(event.target.checked)
  }

  return (
    <>
      <SearchBar
        search={search}
        inLocation={inLocation}
        onInputChange={handleInputChange}
      />

      <TweetsList tweets={data} filters={filters} />
    </>
  )
}

export default TweetsSearchResults
