import React, { useState } from "react";

import FileUpload from "../File/File.component";
import './Text-Area.styles.css';

function TextArea() {
    const [text, setText] = useState("");

    const handleTextAreaChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="text-area">
            <h4>Paste your code below:</h4>
            <textarea
            className="inner"
                id="large-text"
                name="large-text"
                rows="25"
                cols="70"
                value={text}
                onChange={handleTextAreaChange}
            ></textarea>
            <br />
            <h4>Or upload the code file here:</h4>
            <FileUpload></FileUpload>
        </div>
    );
}

export default TextArea;
