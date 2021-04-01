import React from "react";
import classes from "./Select.module.scss"

const Select = props => {
  return(
    <div className={classes.Select}>
      <label>
        {props.label}
        <select
          value={props.value}
          onChange={props.onChange}
        >
          { props.options.map((option, index) => {
            return (
              <option
                value={option.value}
                key={option.value + index}
              >
                {option.text}
              </option>
            )
          }) }
        </select>
      </label>
    </div>
  )
}
export default Select