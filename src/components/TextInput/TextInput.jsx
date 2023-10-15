import React from "react";

export function TextInput({ field, onChange, value }) {
    function onTextChangeHandler(e) {
        console.log(e.target.value);
        onChange(field.type, field.name, e.target.value);
    }
    console.log("textValue: ", value);
    return (
        <div>
            <label htmlFor={field.id}>{field.title}</label>
            <input
                type="text"
                name={field.name}
                id={field.id}
                onChange={onTextChangeHandler}
                value={value}
            />
        </div>
    );
}
