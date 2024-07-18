// CloudinaryUpload.jsx
import { useState } from 'react';

const CloudinaryUpload = ({ onUpload }) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
    const unsignedUploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

    const handleImageUpload = async (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files);
        const uploadedImages = [];

        for (const file of fileArray) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', unsignedUploadPreset);
            try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const data = await response.json();
            uploadedImages.push(data.secure_url);                
            } catch (error) {
                console.log("Error Uploaidng",error);
            }

        }
        onUpload(uploadedImages);
        e.target.value = null;
    }

    return (
        <div className="w-full h-64 relative border-2 border-dashed border-gray-300 flex items-center justify-center" id="imageDiv">
            <input
                type="file"
                id="image-upload"
                multiple
                className="hidden"
                onChange={handleImageUpload}
            />
            <label
                htmlFor="image-upload"
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md absolute"
            >
                Add Images
            </label>
        </div>
    )
}

export default CloudinaryUpload;
