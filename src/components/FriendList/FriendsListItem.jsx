import css from './Friends.module.css'
import { SpanStyled } from './FriendList.styled'

export const FriendsListItem = ({ friends }) => {
    return friends.map(friend => {
        return (
        <li key={friend.id} className={css.item}>
        <SpanStyled isOnline={friend.isOnline} className={css.status}></SpanStyled>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
    </li>)
    })
}