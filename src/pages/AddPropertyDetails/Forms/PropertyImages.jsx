import { useState } from 'react';
;

const PropertyImages = ({ images, setImages }) => {
    const handleImageUpload = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);
        setImages((prevImages) => [...prevImages, ...fileArray]);
        event.target.value = null;
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
                                src={URL.createObjectURL(image)}
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
