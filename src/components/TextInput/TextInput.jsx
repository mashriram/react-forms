import React from "react";

import styles from "./TextInput.module.css";

export function TextInput({ field, onChange, value }) {
    function onTextChangeHandler(e) {
        console.log(e.target.value);
        onChange(field.type, field.name, e.target.value);
    }
    console.log("textValue: ", value);
    return (
        <div className={styles.textInput}>
            <label htmlFor={field.id} className={styles.title}>
                {field.title}
            </label>
            <input
                type="text"
                name={field.name}
                id={field.id}
                onChange={onTextChangeHandler}
                value={value}
                className={styles.input}
            />
        </div>
    );
}
