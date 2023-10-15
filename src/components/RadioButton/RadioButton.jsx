import React from "react";

export function RadioButton({ field, onChange, value }) {
    function onOptionChangeHandler(e) {
        console.log(e.target.value);
        onChange(field.type, field.name, e.target.value);
    }

    console.log("radioValue: ", value);
    return (
        <div>
            <p>{field.title}</p>
            {field.options.map((option) => {
                return (
                    <div key={option.id}>
                        <input
                            type="radio"
                            name={option.name}
                            id={option.id}
                            value={option.value}
                            checked={option.value === value}
                            onChange={onOptionChangeHandler}
                        />
                        <label htmlFor={option.id}>{option.value}</label>
                    </div>
                );
            })}
        </div>
    );
}
