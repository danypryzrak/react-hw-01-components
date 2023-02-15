import css from './Transactions.module.css'

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





