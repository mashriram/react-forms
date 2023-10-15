import React, { useState } from "react";

export function RadioButton({ field }) {
    const [optionValue, setOptionValue] = useState("");

    function onOptionChangeHandler(e) {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    }

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
                            checked={option.value === optionValue}
                            onChange={onOptionChangeHandler}
                        />
                        <label htmlFor={option.id}>{option.value}</label>
                    </div>
                );
            })}
        </div>
    );
}
