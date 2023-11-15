import './filter.scss'

const Filter = ({ children, className }) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Filter