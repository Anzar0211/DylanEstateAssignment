// PropertyImages.jsx
import { useState } from 'react';
import CloudinaryUpload from '../../../components/CloudinaryUpload';

const PropertyImages = ({ images, setImages }) => {
    const handleImageUpload = (uploadedImages) => {
        setImages((prevImages) => [...prevImages, ...uploadedImages]);
    };

    const handleDeleteImage = (indexToDelete) => {
        setImages((prevImages) => prevImages.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="w-full h-full">
            <div className="flex flex-col p-5 m-5 gap-7">
                <h2 className="text-xl">Add Photos/ videos to attract more tenants!</h2>
                <form className="flex flex-col">
                    <div className="w-full">
                        <label htmlFor="image-upload" className="font-semibold">
                            Add Photos of living room, bedroom, floor, doors, kitchen, balcony, location map, neighborhood, etc.
                        </label>
                        <CloudinaryUpload onUpload={handleImageUpload} />
                    </div>
                </form>
                <h2>Click on the image to delete the image</h2>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full h-32 cursor-pointer"
                            onClick={() => handleDeleteImage(index)}
                        >
                            <img
                                src={image}
                                alt={`Uploaded ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyImages;
