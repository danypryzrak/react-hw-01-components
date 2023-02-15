import { FriendsListItem } from './FriendsListItem'
import css from './Friends.module.css'

export const FriendsList = ({friends}) => {
    return (
        <ul className={css.friendsList}>
            <FriendsListItem friends={friends}/>
        </ul>
    )
}