import React from "react";

import styles from "./Dropdown.module.css";

export function Dropdown({ field, onChange, value }) {
    function onChangeHandler(e) {
        console.log(e.target.value);
        onChange(field.type, field.name, e.target.value);
    }

    return (
        <div className={styles.dropdown}>
            <label htmlFor={field.id} className={styles.title}>
                {field.title}
            </label>
            <select
                name={field.name}
                id={field.id}
                defaultValue={field.defaultValue}
                onChange={onChangeHandler}
                className={styles.input}
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
