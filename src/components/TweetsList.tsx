import { ReactNode } from "react";
import { Filters } from "../types/filters";
import { Tweet } from "../types/tweet";
import TweetItem from "./TweetItem/TweetItem";

type TweetListProps = {
    tweets: Tweet[];
    filters: Filters;
}

function useTweetsFilter(tweets: Tweet[], filters: Filters) {
    const rows: ReactNode[] = [];
    let lastCategory: string = '';

    // Conditions
    const inLocation = (tweet: Tweet) => tweet.isLocal == filters.inLocation
    const includesText = (tweet: Tweet) => tweet.text.toLowerCase().includes(filters.search.toLowerCase())
    
    const filteredData = tweets.filter(tweet => {
        if (!filters.search.trim()) {
            return inLocation(tweet)
        }

        return inLocation(tweet) && includesText(tweet)
    })

    filteredData.forEach((tweet, i) => {
        if (tweet.category !== lastCategory) {
            rows.push(<h2 key={i}>{tweet.category}</h2>)
            lastCategory = tweet.category
        }
        rows.push(<TweetItem tweet={tweet} key={tweet.text} />)
    })

    return rows;
}

function TweetList({ tweets, filters }: TweetListProps) {
    const rows = useTweetsFilter(tweets, filters)

    return <section>{rows}</section>
}

export default TweetList;