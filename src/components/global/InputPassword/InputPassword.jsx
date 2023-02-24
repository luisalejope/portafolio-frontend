import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './style.css'
import { useForm } from '../../../hooks/useForm';

const InputPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [values, handleInputChange] = useForm({
        password: "",
    });
    const handleShowPass = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="input-container">
            <input name="password" type={showPassword ? 'text' : 'password'} value={values.password} onChange={handleInputChange} className='input-pass'/>
            <i id="icon-eye">
                {showPassword ? <VisibilityIcon onClick={handleShowPass} /> : <VisibilityOffIcon onClick={handleShowPass} />}
            </i>
        </div>
    )
}

export default InputPassword