import React from "react";

import styles from "./CheckBox.module.css";

export function CheckBox({ field, onChange, values }) {
    function onCheckBoxChangeHandler(e) {
        console.log(field.name, e.target.value);
        onChange(field.type, field.name, e.target.value);
    }

    return (
        <div>
            <p className={styles.title}>{field.title}</p>
            {field.options.map((option) => {
                let checked = values
                    ? values[option.value]
                        ? values[option.value]
                        : false
                    : false;
                // console.log("optionChecked: ", option.name, checked);
                return (
                    <div key={option.id} className={styles.input}>
                        <input
                            type="checkbox"
                            name={option.name}
                            id={option.id}
                            value={option.value}
                            onChange={onCheckBoxChangeHandler}
                            checked={checked}
                        />
                        <label htmlFor={option.id} className={styles.label}>
                            {option.name}
                        </label>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}
