import css from './Profile.module.css'

export const Profile = ({user}) => {
const {username, tag, location, avatar, stats} = user
    return (
<div className={css.profile}>
            <div className={css.description}>
    <img 
    src={avatar}
    alt="User avatar"
    className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
    <li className={css.li}>
        <span className={css.label}>Followers</span>
        <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.li}>
        <span className={css.label}>Views</span>
        <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.li}>
        <span className={css.label}>Likes</span>
        <span className="quantity">{stats.likes}</span>
    </li>
    </ul>
</div>
    )
}