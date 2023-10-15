import React from "react";

export function Dropdown({ field, onChange, value }) {
    function onChangeHandler(e) {
        console.log(e.target.value);
        onChange(field.type, field.name, e.target.value);
    }

    return (
        <div>
            <label htmlFor={field.id}>{field.title}</label>
            <select
                name={field.name}
                id={field.id}
                defaultValue={field.defaultValue}
                onChange={onChangeHandler}
            >
                {field.options.map((option) => (
                    <option
                        hidden={option.hidden}
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
