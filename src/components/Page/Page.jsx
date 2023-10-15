import React from "react";
import { TextInput } from "../TextInput/TextInput";
import { RadioButton } from "../RadioButton/RadioButton";
import { CheckBox } from "../CheckBox/CheckBox";
import { PrevButton } from "../PrevButton/PrevButton";
import NextButton from "../NextButton/NextButton";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import {
    TEXT_INPUT,
    RADIO_BUTTON,
    CHECK_BOX,
    DROP_DOWN,
} from "./../../constants/AppConstants";
import { Dropdown } from "../Dropdown/Dropdown";

function displayFields(
    isFirstPage,
    isLastPage,
    fields,
    formData,
    onNext,
    onPrev,
    onSubmit,
    onChange
) {
    let uiFields = [];
    for (const field of fields) {
        let uiField;
        if (field.type === TEXT_INPUT) {
            uiField = (
                <TextInput
                    key={field.id}
                    field={field}
                    onChange={onChange}
                    value={formData[field.name] ? formData[field.name] : ""}
                />
            );
        } else if (field.type === RADIO_BUTTON) {
            uiField = (
                <RadioButton
                    key={field.id}
                    field={field}
                    onChange={onChange}
                    value={formData[field.name]}
                />
            );
        } else if (field.type === CHECK_BOX) {
            uiField = (
                <CheckBox
                    key={field.id}
                    field={field}
                    onChange={onChange}
                    values={formData[field.name]}
                />
            );
        } else if (field.type === DROP_DOWN) {
            uiField = (
                <Dropdown
                    key={field.id}
                    field={field}
                    onChange={onChange}
                    value={formData[field.name]}
                />
            );
        }
        uiFields.push(uiField);
    }
    if (!isLastPage) {
        uiFields.push(<NextButton key={fields.length} onClick={onNext} />);
    }
    if (!isFirstPage) {
        uiFields.push(<PrevButton key={fields.length} onClick={onPrev} />);
    }
    if (isLastPage) {
        uiFields.push(<SubmitButton key={fields.length} onSubmit={onSubmit} />);
    }

    console.log(uiFields);
    return uiFields;
}

export function Page({
    isFirstPage,
    isLastPage,
    page: { title, fields },
    formData,
    onNext,
    onPrev,
    onSubmit,
    onChange,
}) {
    console.log(isFirstPage, isLastPage);
    return (
        <div>
            <h1>{title}</h1>
            {displayFields(
                isFirstPage,
                isLastPage,
                fields,
                formData,
                onNext,
                onPrev,
                onSubmit,
                onChange
            )}
        </div>
    );
}
