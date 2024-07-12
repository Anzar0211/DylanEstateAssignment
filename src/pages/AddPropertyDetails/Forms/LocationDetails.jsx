import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

console.log(import.meta.env.VITE_MAPBOX_URL);

mapboxgl.accessToken =  import.meta.env.VITE_MAPBOX_URL

const LocationDetails = () => {
    const { register, watch, setValue } = useFormContext();
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const popupRef = useRef(null);

    const buildingSociety = watch('buildingSociety');
    const localityArea = watch('localityArea');
    const landmarkStreet = watch('landmarkStreet');
    const city = watch('city');
    const coordinates = watch('coordinates') || [0, 0];

    useEffect(() => {
        if (mapRef.current) return;
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [77.2088, 28.6139],
            zoom: 5,
        });

        map.on('load', () => {
            mapRef.current = map;
        });
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;

        if (markerRef.current) {
            markerRef.current.remove();
        }
        if (popupRef.current) {
            popupRef.current.remove();
        }

        const address = `${buildingSociety || ''}, ${localityArea || ''}, ${landmarkStreet || ''}, ${city || ''}`.trim();
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(address);

        const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(mapRef.current);

        markerRef.current = marker;
        popupRef.current = popup;
        mapRef.current.flyTo({ center: coordinates, zoom: 18 });
    }, [coordinates, buildingSociety, localityArea, landmarkStreet, city]);

    const handleGeocode = async () => {
        const address = `${buildingSociety || ''}, ${localityArea || ''}, ${landmarkStreet || ''}, ${city || ''}`.trim();
        const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            const [lng, lat] = data.features[0].center;
            setValue('coordinates', [lng, lat]);
        }
    };

    return (
        <div className="w-full h-full">
            <form className="flex flex-col p-5 gap-7">
                <div className="flex flex-col mb-4 gap-5">
                    <div className="flex flex-col md:flex-row gap-5 mt-5 justify-between">
                        <div className="flex flex-col gap-3 md:w-[46%] w-full">
                            <label htmlFor="buildingSociety" className="font-semibold">Building/Society Name</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    id="buildingSociety"
                                    placeholder="Enter Apartment Name"
                                    className="p-2 pl-3 pr-16 w-full border-2 border-black"
                                    {...register('buildingSociety')}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:w-[46%] w-full">
                            <label htmlFor="localityArea" className="font-semibold">Locality/Area</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    id="localityArea"
                                    placeholder="Eg: Sheetal Nagar"
                                    className="p-2 pl-3 pr-16 w-full border-2 border-black"
                                    {...register('localityArea')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5 mt-5 justify-between">
                        <div className="flex flex-col gap-3 md:w-[46%] w-full">
                            <label htmlFor="landmarkStreet" className="font-semibold">Landmark/Street Name</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    id="landmarkStreet"
                                    placeholder="Prominent Landmarks"
                                    className="p-2 pl-3 pr-16 w-full border-2 border-black"
                                    {...register('landmarkStreet')}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:w-[46%] w-full">
                            <label htmlFor="city" className="font-semibold">City</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="Eg: Mumbai"
                                    className="p-2 pl-3 pr-16 w-full border-2 border-black"
                                    {...register('city')}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleGeocode}
                        className="px-4 md:w-1/5 w-1/2 bg-custom-background-main py-2 bg-blue-500 text-white rounded-md"
                    >
                        Show on Map
                    </button>
                    <div ref={mapContainerRef} className="flex justify-center md:w-4/5 w-full h-64 mt-5"></div>
                </div>
            </form>
        </div>
    );
};

export default LocationDetails;
