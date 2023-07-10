import React from 'react'
import './Button.scss'

const Button = (props: any): JSX.Element => {
  const { title } = props
  return (
    <button className="button-1">
      <p>{title}</p>
    </button>
  )
}
export default Button
