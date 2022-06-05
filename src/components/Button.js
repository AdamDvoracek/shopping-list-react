import PropTypes from 'prop-types'

const Button = ({ style, text, onClick }) => {
    return (
        <button onClick={onClick} style={style}
        className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    title: 'My buy list'
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
