import React from "react";

import styles from "./NextButton.module.css"

export function NextButton() {
    return (
        <div className={styles.btnDiv}>
            <button type="button" id={styles.btn}>Next</button>
        </div>
    );
}
