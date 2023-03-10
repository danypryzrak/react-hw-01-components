import css from './Statistic.module.css'
import { getRandomColor } from './randomColor'
import PropTypes from 'prop-types'

export const Statistic = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {stats.map(stat => {
                    return <li key={stat.id} style={{backgroundColor: getRandomColor()}} className={css.item}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}</span>
                    </li>
                })}
            </ul>
</section>
)
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};