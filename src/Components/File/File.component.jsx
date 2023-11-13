import React, { useState } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && (
                <div>
                    <p>File Size: {selectedFile.size} bytes</p>
                </div>
            )}
        </div>
    );
}

export default FileUpload;
