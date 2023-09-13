import React from 'react'
import { ButtonPropsType } from '../../../types/ButtonPropsType'

const Button: React.FC<ButtonPropsType> = ({handleClick, className, value, svg}) => {
  return (
    <button className={className} onClick={handleClick}>
            {value}
            <>{svg}</>
    </button>
  )
}

export default Button