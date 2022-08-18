import { Tweet } from '../../types/tweet';
import './TweetItem.css'

type TweetItemProps = {
    tweet: Tweet
}
function TweetItem({ tweet }: TweetItemProps) {
    return <p>{tweet.text} <span>{tweet.retweets}</span></p>
}

export default TweetItem;