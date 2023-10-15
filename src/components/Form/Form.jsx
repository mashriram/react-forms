import React, { useState } from "react";
import styles from "./Form.module.css";

import formConfig from "./../../config/basic-form.json";
import { Page } from "../Page/Page";

import {
    TEXT_INPUT,
    RADIO_BUTTON,
    CHECK_BOX,
    DROP_DOWN,
} from "./../../constants/AppConstants";

export function Form() {
    const [pageNumber, setPageNumber] = useState(0);

    const [formData, setFormData] = useState({});

    function onChangeHandler(fieldType, fieldName, fieldValue) {
        let updatedFormData = { ...formData };
        console.log("formData: ", JSON.stringify(updatedFormData));

        if (fieldType === TEXT_INPUT) {
            updatedFormData[fieldName] = fieldValue;
        } else if (fieldType == RADIO_BUTTON) {
            updatedFormData[fieldName] = fieldValue;
        } else if (fieldType == CHECK_BOX) {
            let prevState = updatedFormData[fieldName];
            if (!prevState) {
                prevState = { [fieldValue]: true };
            } else if (prevState[fieldValue] == undefined) {
                prevState[fieldValue] = true;
            } else {
                prevState[fieldValue] = !prevState[fieldValue];
            }
            updatedFormData[fieldName] = prevState;
        } else if (fieldType == DROP_DOWN) {
            updatedFormData[fieldName] = fieldValue;
        }
        console.log("updatedFormData: ", JSON.stringify(updatedFormData));
        setFormData(updatedFormData);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(formData);
    }

    function onPrevHandler(e) {
        console.log("prev button clicked");
        e.preventDefault();

        if (pageNumber == 0) {
            console.log("already in first page.. can't go to prev page");
        } else {
            setPageNumber((prevState) => {
                return prevState - 1;
            });
        }
    }

    function onNextHandler(e) {
        console.log("next button clicked");
        e.preventDefault();

        if (pageNumber == formConfig.pages.length - 1) {
            console.log("already in last page, can't go to next page");
        } else {
            setPageNumber((prevState) => {
                return prevState + 1;
            });
        }
    }

    let page = formConfig.pages[pageNumber];
    console.log("formdata: ", formData);
    return (
        <form className={styles.form}>
            <Page
                isFirstPage={pageNumber === 0}
                isLastPage={pageNumber === formConfig.pages.length - 1}
                page={page}
                formData={formData}
                onPrev={onPrevHandler}
                onNext={onNextHandler}
                onSubmit={onSubmitHandler}
                onChange={onChangeHandler}
            />
        </form>
    );
}
