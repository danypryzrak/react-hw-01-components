import { SpanStyled } from './FriendList.styled'
import css from './Friends.module.css'
import PropTypes from 'prop-types'

export const FriendsList = ({friends}) => {
    return (
        <ul className={css.friendsList}>
        {friends.map(friend => {
            return (
            <li key={friend.id} className={css.item}>
            <SpanStyled isOnline={friend.isOnline} className={css.status}></SpanStyled>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
            </li>)
            })}
        </ul>
    )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};