import { Profile } from "./Profile/Profile";
import user from '../data/user'
import { Statistic } from "./Statistics/Statistic";
import stats from '../data/statistic'
import { FriendsList } from "./FriendList/FriendList";
import friends from '../data/friends'
import { Transactions } from "./Transaction/Transactions";
import transactions from "../data/transactions"

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title='UPLOAD STATS' stats={stats} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};
