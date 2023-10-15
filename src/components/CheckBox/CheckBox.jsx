import React, { forwardRef } from "react";

export function CheckBox({ field, onChange, values }) {
    function onCheckBoxChangeHandler(e) {
        console.log(field.name, e.target.value);
        onChange(field.type, field.name, e.target.value);
    }

    return (
        <div>
            <p>{field.title}</p>
            {field.options.map((option) => {
                let checked = values
                    ? values[option.value]
                        ? values[option.value]
                        : false
                    : false;
                // console.log("optionChecked: ", option.name, checked);
                return (
                    <div key={option.id}>
                        <input
                            type="checkbox"
                            name={option.name}
                            id={option.id}
                            value={option.value}
                            onChange={onCheckBoxChangeHandler}
                            checked={checked}
                        />
                        <label htmlFor={option.id}>{option.name}</label>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}
