import { ReactNode } from 'react'
import TweetItem from '../components/TweetItem/TweetItem'
import { Filters } from '../types/filters'
import { Tweet } from '../types/tweet'

export function useTweetsFilter(tweets: Tweet[], filters: Filters) {
  const rows: ReactNode[] = []
  let lastCategory: string = ''

  // Conditions
  const inLocation = (tweet: Tweet) => tweet.isLocal == filters.inLocation
  const includesText = (tweet: Tweet) =>
    tweet.text.toLowerCase().includes(filters.search.toLowerCase())

  // Filter data
  const filteredData = tweets.filter((tweet) => {
    if (filters.inLocation) {
      return inLocation(tweet) && includesText(tweet)
    }

    return includesText(tweet)
  })

  // Build rows
  filteredData.forEach((tweet, i) => {
    if (tweet.category !== lastCategory) {
      rows.push(<h2 key={i}>{tweet.category}</h2>)
      lastCategory = tweet.category
    }
    rows.push(<TweetItem tweet={tweet} key={tweet.text} />)
  })

  return rows
}
