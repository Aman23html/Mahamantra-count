import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.hc}>
        {props.text}

    </button>
  )
}

export default Button
