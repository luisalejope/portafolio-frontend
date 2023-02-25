import React from 'react'

import './style.css'
import { useForm } from '../../../hooks/useForm';


const InvalidInput = () => {
    const [values, handleInputChange] = useForm({
        invalid: "",
    });

    return (
            <input name="invalid" type='text' placeholder='Enter text' className='input-container' pattern='[a-z]*' value={values.invalid} onChange={handleInputChange}/>  
    )
}

export default InvalidInput