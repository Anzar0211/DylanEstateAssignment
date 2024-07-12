import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FeaturesAmenities from './FeaturesAmenities';
import LocationDetails from './LocationDetails';
import PriceDetails from './PriceDetails';
import PropertyDetailsSection from './PropertyDetailsSection';
import PropertyImages from './PropertyImages';
import { uploadImagesToCloudinary } from '../../../utils/CloudinaryUtils';
import { useNavigate } from 'react-router-dom';


const sections = [
    'PropertyDetails',
    'LocationDetails',
    'FeaturesAmenities',
    'PriceDetails',
    'PropertyImages'
];

const MainForm = () => {
    const navigate=useNavigate()
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [formData, setFormData] = useState({});
    const methods = useForm();
    const [images, setImages] = useState([]);
    const { handleSubmit, formState: { isValid } } = methods;

    const renderSection = () => {
        switch (sections[currentSectionIndex]) {
            case 'PropertyDetails':
                return <PropertyDetailsSection />;
            case 'LocationDetails':
                return <LocationDetails />;
            case 'FeaturesAmenities':
                return <FeaturesAmenities />;
            case 'PriceDetails':
                return <PriceDetails />;
            case 'PropertyImages':
                return <PropertyImages images={images} setImages={setImages}/>;
            default:
                return <PropertyDetailsSection />;
        }
    };

    const onSubmit =async data => {
        const imageUrls = await uploadImagesToCloudinary(images);
        const finalData = {
            ...data,
            images: imageUrls,
        };
        setFormData(finalData);

        if (currentSectionIndex < sections.length - 1) {
            setCurrentSectionIndex(currentSectionIndex + 1);
        } else {
            console.log('Final form data:', finalData);
            navigate('/greetings')

            // Store data for summary page
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="md:flex-1 flex flex-col p-5 m-4 h-4/5">
                <form
                    action=""
                    className="flex flex-col m-2 w-full shadow-2xl rounded-2xl overflow-y-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Form Header Buttons Start */}
                    <div className="flex flex-row mt-3 justify-between bg-custom-background-navbar rounded-t-xl">
                        {sections.map((section, index) => (
                            <button
                                key={section}
                                type="button"
                                onClick={() => setCurrentSectionIndex(index)}
                                disabled={index > currentSectionIndex}
                                className={`flex-shrink-0 w-1/5 p-5 ${currentSectionIndex === index ? 'bg-blue-100 text-black font-bold' : 'bg-custom-background-navbar font-normal'} ${index > currentSectionIndex ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                {section.replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        ))}
                    </div>
                    {/* Form Header Buttons End */}
                    {/* Form Body */}
                    <div className="flex flex-col overflow-y-auto flex-grow w-full text-sm items-center justify-between">
                        {renderSection()}
                    </div>
                    {/* Form Footer */}
                    <div className='flex items-center justify-between bg-custom-background-main py-3 px-5 rounded-b-xl'>
                        <div className='text-sm text-white'>Need Help?
                            <span className='font-semibold'> Call 99999999999
                            </span>
                        </div>
                        <button
                            type="submit"
                            className='text-white bg-custom-background-main shadow-lg border-2 border-white px-7 py-1 rounded-md'
                            disabled={!isValid}
                        >
                            {currentSectionIndex === sections.length - 1 ? 'SAVE AND POST' : 'NEXT'}
                        </button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default MainForm;
