import React from "react";

import styles from "./RadioButton.module.css";

export function RadioButton({ field, onChange, value }) {
    function onOptionChangeHandler(e) {
        console.log(e.target.value);
        onChange(field.type, field.name, e.target.value);
    }

    console.log("radioValue: ", value);
    return (
        <div>
            <p className={styles.title}>{field.title}</p>
            {field.options.map((option) => {
                return (
                    <div key={option.id} className={styles.input}>
                        <input
                            type="radio"
                            name={option.name}
                            id={option.id}
                            value={option.value}
                            checked={option.value === value}
                            onChange={onOptionChangeHandler}
                        />
                        <label htmlFor={option.id} className={styles.label}>
                            {option.value}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
