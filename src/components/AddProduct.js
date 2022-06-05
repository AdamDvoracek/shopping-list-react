import { useState } from "react"

const AddProduct = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add valid product')
            return
        }
        onAdd({ text })
        setText('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label></label>
                <input type='text' placeholder='Click to add'
                value={text} onChange={(e) => 
                setText(e.target.value)}/>
            </div>
            <input type='submit' value='Add to list' className='btn btn-block'/>
        </form>
    )
}

export default AddProduct
