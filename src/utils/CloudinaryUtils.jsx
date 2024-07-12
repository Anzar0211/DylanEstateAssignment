export const uploadImagesToCloudinary = async (files) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_NAME; 
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET; 

    const uploadPromises = Array.from(files).map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => data.secure_url);
    });

    return await Promise.all(uploadPromises);
};
