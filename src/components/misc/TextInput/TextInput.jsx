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
          className={`text-input text-area ${
            touched[field.name] && errors[field.name] && "text-input--error"
          }`}
          placeholder={props.placeholder}
          {...field}
          {...props}
        />
      ) : (
        <input
          className={`text-input ${
            touched[field.name] && errors[field.name] && "text-input--error"
          }`}
          placeholder={props.placeholder}
          {...field}
          {...props}
        />
      )}
      <div className="text-input--div-error">
        {touched[field.name] && errors[field.name] ? errors[field.name] : ""}
      </div>
    </div>
  );

export default TextInput;
