import { FaTimes} from 'react-icons/fa'

const Product = ({ product, onDelete }) => {
  return (
    <div className='product' style={barStyle}>
      <h3>{product.text}
      <FaTimes style={crossStyle}
        onClick={() => onDelete(product.id)}/>
      </h3>
      <p>{product.category}</p>
    </div>
  )
}

const crossStyle = {
    color: 'white',
    cursor: 'pointer'
}

const barStyle = {
    color: 'cyan',
    cursor: 'pointer'
}

export default Product
