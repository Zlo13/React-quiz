import React from "react";
import classes from "./Input.module.scss"

function isInvalid ({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text';
  const cls = [classes.Input];

  if (isInvalid(props)){
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label>
        {props.label}
        <input
          type={inputType}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
      {
        isInvalid(props)
        ? <span>{props.errorMessage || 'Введите верное значение'}</span>
        : null
      }

    </div>
  )
}

export default Input