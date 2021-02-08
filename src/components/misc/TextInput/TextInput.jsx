import React from "react";
import "./TextInput.styles.css";

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) =>
  console.log(props) || (
    <div>
      {field.name === "message" ? (
        <textarea
          className="text-input text-area"
          placeholder={props.placeholder}
          {...field}
          {...props}
        />
      ) : (
        <input
          className="text-input"
          placeholder={props.placeholder}
          {...field}
          {...props}
        />
      )}

      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );

export default TextInput;
