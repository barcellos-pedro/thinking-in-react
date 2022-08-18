import { ReactNode } from 'react'
import { useTweetsFilter } from '../hooks/UseTweetsFilter'
import { Filters } from '../types/filters'
import { Tweet } from '../types/tweet'

type TweetListProps = {
  tweets: Tweet[]
  filters: Filters
}

function TweetsList({ tweets, filters }: TweetListProps) {
  const rows = useTweetsFilter(tweets, filters)

  return <section>{rows}</section>
}

export default TweetsList
