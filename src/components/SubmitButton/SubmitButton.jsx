import React from "react";

export function SubmitButton({ onSubmit }) {
    return (
        <div>
            <button type="button" onClick={onSubmit}>
                Submit
            </button>
        </div>
    );
}
