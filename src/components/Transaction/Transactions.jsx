import css from './Transactions.module.css'
import PropTypes from 'prop-types'

export const Transactions = ({ transactions }) => {
    return (
<table className={css.transactions}>
    <thead className={css.tableHead}>
        <tr>
            <th className={css.tableHeadLine}>Type</th>
            <th className={css.tableHeadLine}>Amount</th>
            <th className={css.tableHeadLine}>Currency</th>
        </tr>
    </thead>

    <tbody className={css.tableBody}>
        {transactions.map(transaction => {
        return (
        <tr className={css.tableLine} key={transaction.id}>
        <td className={css.tableColumn}>{transaction.type}</td>
        <td className={css.tableColumn}>{transaction.amount}</td>
        <td className={css.tableColumn}>{transaction.currency}</td>
    </tr>)})}
    </tbody>
</table>
    )
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};



