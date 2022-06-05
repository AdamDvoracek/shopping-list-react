import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button style={addButtonStyle} text='Add'
            onClick={onAdd}/>
            <Button style={removeButtonStyle} text='Remove' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Mu buy list'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'black'
}

const addButtonStyle = {
    color: 'white',
    backgroundColor: 'green'
}
const removeButtonStyle = {
    color: 'white',
    backgroundColor: 'red'
}

export default Header
