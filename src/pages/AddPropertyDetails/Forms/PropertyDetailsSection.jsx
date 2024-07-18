import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const residentialTypes = ["Flat/Apartment", "House/Villa"];

const commercialTypes = [
  "Office Space",
  "CoWorking",
  "Restaurant/Cafe",
  "Shop/Showroom",
  "Industrial Bldg.",
  "Warehouse/Godown",
];

const propertyAges=[
  "Less than 1 year",
  "1 - 3 years",
  "3 - 5 Years",
  "5 - 10 Years",
  "Greater than 10 Years"
]

const BHKTypes=[
  "1 RK",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "5+ BHK"
]

const propertyBaths=[
  "1",
  "2",
  "3",
  "4",
  "5",
  "6+"
]

const propertyBalconies=[
    "0 B",
    "1 B",
    "2 B",
    "3 B",
    "4+ B"
]

const tenantPreferences=[
  "Any",
  "Family",
  "Bachelor (Man)",
  "Bachelor (Woman)"
]

const Availability=[
  "Immediate",
  "within 15 Days",
  "within 1 month",
  "within 2 months"
]

const PropertyDetailsSection = () => {
  const { register, watch, setValue,formState:{errors},getValues } = useFormContext();
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedSubTypes, setSelectedSubTypes] = useState([]);

  const propertyType = watch("propertyType");
  const propertyAge=watch("propertyAge");
  const propertyBHK=watch("propertyBHK");
  const propertyBath=watch("propertyBath");
  const propertyBalcony=watch("propertyBalcony");
  const tenantPreference=watch("tenantPreference");
  const propertyAvailabilty=watch("availability");

  useEffect(() => {
    setSelectedPropertyType(propertyType);
  }, [propertyType]);

  const handleSubTypeChange = (type) => {
    setSelectedSubTypes((prev) => {
      const newSelection = prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type];
      setValue("propertySubTypes", newSelection);
      return newSelection;
    });
  };
  return (
    <div className="w-full h-full">
      <form action="" className="flex flex-col p-5 gap-7 ">
        <div className="flex flex-col gap-3 md:w-2/5 w-3/5">
          <label htmlFor="" className="text-md font-bold">
            Property For :
          </label>
          <div className="gap-10 flex justify-between">
            <span className="mr-5">
              <input type="radio" {...register("propertyFor",{
                required:"This field is required"
              })} value="Rent" />{" "}
              Rent
            </span>
            <span>
              <input type="radio" {...register("propertyFor",{
                required:"This field is required"
              })} value="Sale" />{" "}
              Sale
            </span>
          </div>
          {errors.propertyFor && <p className="text-red-500 text-sm">{errors.propertyFor.message}</p>}
        </div>
        {/* Property Type */}
        <div className="flex flex-col gap-3 md:w-4/5 w-full mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Property Type :
          </label>
          <div className="flex justify-between mb-4">
            <span className="">
              <input
                {...register("propertyType")}
                type="radio"
                value="Residential"
              />{" "}
              Residential
            </span>
            <span>
              <input
                {...register("propertyType")}
                type="radio"
                value="Commercial"
              />{" "}
              Commercial
            </span>
            <span>
              <input
                {...register("propertyType")}
                type="radio"
                value="Land/Plot"
              />{" "}
              Land/Plot
            </span>
          </div>
          {selectedPropertyType === "Residential" && (
            <div className="w-3/5 flex justify-start gap-3 items-center flex-wrap">
              {residentialTypes.map((type, index) => (
                <label
                  className="cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold"
                  key={index}
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    value={type}
                    checked={selectedSubTypes.includes(type)}
                    onChange={() => handleSubTypeChange(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
          {selectedPropertyType === "Commercial" && (
            <div className="w-3/5 flex justify-start gap-3 items-center flex-wrap">
              {commercialTypes.map((type, index) => (
                <label
                  className="cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold"
                  key={index}
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    value={type}
                    checked={selectedSubTypes.includes(type)}
                    onChange={() => handleSubTypeChange(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>
        {/* Property Area */}
        <div className="flex flex-col mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Property Area :
          </label>
          <div className="flex md:flex-row flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="BuiltAreaInput" className="font-semibold">
                Built Up Area :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyArea",{
                    required:"This field is required",
                    min:{
                      value:100,
                      message:"Minimum area should be 100 sq.ft"
                    }
                  })}
                  type="number"
                  id="BuiltAreaInput"
                  placeholder="Enter Area"
                  className="p-2 pl-3 pr-16 w-full border-2 border-black"
                />
                <span
                  className="absolute right-2  bg-gray-300 text-gray-600 text-sm rounded"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  Sq.Ft
                </span>
              </div>
              {errors.propertyArea && <p className="text-red-500 text-sm">{errors.propertyArea.message}</p>}
            </div>
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="carpetAreaInput" className="font-semibold">
                Carpet Area :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyCarpetArea",{
                    required:"This field is required",
                    min:{
                      value:100,
                      message:"Minimum carpet area should be 100 sq.ft"
                    }
                  })}
                  type="number"
                  id="carpetAreaInput"
                  placeholder="Enter Area"
                  className="p-2 pl-3 pr-16 w-full border-2 border-black"
                />
                <span
                  className="absolute right-2  bg-gray-300 text-gray-600 text-sm rounded"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  Sq.Ft
                </span>
              </div>
              {errors.propertyCarpetArea && <p className="text-red-500 text-sm">{errors.propertyCarpetArea.message}</p>}
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-3 md:w-1/5 w-4/5">
              <label htmlFor="PropertyFloor" className="font-semibold">
                Property on Floor :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyFloor",{
                    required:"This field is required",
                    validate: value => parseInt(value, 10) >= 0 || "Property floor must be 0 or greater"
                  })}
                  type="number"
                  id="PropertyFloor"
                  placeholder="Floor"
                  className="p-2 pl-3 pr-16 w-full border-2 border-black"
                />
              </div>
              {errors.propertyFloor && <p className="text-red-500 text-sm">{errors.propertyFloor.message}</p>}
            </div>
            <div className="flex flex-col gap-3 md:w-1/5 w-4/5">
              <label htmlFor="TotalFloors" className="font-semibold">
                Total Floors :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyTotalFloors",{
                    required:"This field is required",
                    validate: value => parseInt(value, 10) >= getValues("propertyFloor") || "Total floors must be greater than or equal to property floor"
                  })}
                  type="number"
                  id="TotalFloors"
                  placeholder="Total Floors"
                  className="p-2 pl-3 pr-16 w-full border-2 border-black"
                />
              </div>
              {errors.propertyTotalFloors && <p className="text-red-500 text-sm">{errors.propertyTotalFloors.message}</p>}
            </div>
            <div className="flex flex-col gap-3 md:w-2/5 w-4/5">
              <label htmlFor="PropertyFacing" className="font-semibold">
                Property Facing :
              </label>
              <select
                {...register("propertyFacing",{
                  required:"This field is required"
                })}
                id="PropertyFacing"
                className="p-2 pl-3 pr-16 w-full border-2 border-black"
              >
                <option value="">Select</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="West">West</option>
                <option value="East">East</option>
              </select>
              {errors.propertyFacing && <p className="text-red-500 text-sm">{errors.propertyFacing.message}</p>}
            </div>
          </div>
        </div>
        {/* Property Age */}
        <div className="flex flex-col w-full  gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Property Age
          </label>
          <div className="flex md:flex-nowrap flex-wrap gap-5 justify-between">
            {propertyAges.map((age, index) => (
              <label
                htmlFor={age}
                className={
                  propertyAge===age ? "cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
                  :"cursor-pointer bg-gray-300 text-sm rounded-full px-5 py-2 font-semibold"
                }
                key={index}
              >
                <input
                  {...register("propertyAge",{
                    required:"This field is required"
                  })}
                  id={age}
                  className="hidden"
                  type="radio"
                  name="propertyAge"
                  value={age}
                />{" "}
                {age}
              </label>
            ))}                          
          </div>
          {errors.propertyAge && <p className="text-red-500 text-sm">{errors.propertyAge.message}</p>}
        </div>
        {/* Property BHK */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            BHK Type
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            {BHKTypes.map((bhk, index) => (
              <label
                htmlFor={bhk}
                className={
                  propertyBHK===bhk ? "cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
                  :"cursor-pointer bg-gray-300 text-sm rounded-full px-5 py-2 font-semibold"
                }
                key={index}
              >
                <input
                  {...register("propertyBHK",{
                    required:"This field is required"
                  })}
                  id={bhk}
                  className="hidden"
                  type="radio"
                  name="propertyBHK"
                  value={bhk}
                />{" "}
                {bhk}
              </label>
            ))}
          </div>
          {errors.propertyBHK && <p className="text-red-500 text-sm">{errors.propertyBHK.message}</p>}
        </div>
        {/* Property Bath/Toilets */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Bathrooms/Toilets
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            {propertyBaths.map((bath, index) => (
              <label
                htmlFor={bath}
                className={
                  propertyBath===bath ? "cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
                  :"cursor-pointer bg-gray-300 text-sm rounded-full px-5 py-2 font-semibold"
                }
                key={index}
              >
                <input
                  {...register("propertyBath",{
                    required:"This field is required"
                  })}
                  id={bath}
                  className="hidden"
                  type="radio"
                  name="propertyBath"
                  value={bath}
                />{" "}
                {bath}
              </label>
            ))}
          </div>
          {errors.propertyBath && <p className="text-red-500 text-sm">{errors.propertyBath.message}</p>}
        </div>
        {/* Property Balconies */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Balcony
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            {propertyBalconies.map((balcony, index) => (
              <label
                htmlFor={balcony}
                className={
                  propertyBalcony===balcony ? "cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
                  :"cursor-pointer bg-gray-300 text-sm rounded-full px-5 py-2 font-semibold"
                }
                key={index}
              >
                <input
                  {...register("propertyBalcony",{
                    required:"This field is required"
                  })}
                  id={balcony}
                  className="hidden"
                  type="radio"
                  name="propertyBalcony"
                  value={balcony}
                />{" "}
                {balcony}
              </label>
            ))}
          </div>
          {errors.propertyBalcony && <p className="text-red-500 text-sm">{errors.propertyBalcony.message}</p>}
        </div>
        {/* Tenant Preference */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Tenant Preference
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            {tenantPreferences.map((preference, index) => (
              <label
                htmlFor={preference}
                className={
                  tenantPreference===preference ? "cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
                  :"cursor-pointer bg-gray-300 text-sm rounded-full px-5 py-2 font-semibold"
                }
                key={index}
              >
                <input
                  {...register("tenantPreference",{
                    required:"This field is required"
                  })}
                  id={preference}
                  className="hidden"
                  type="radio"
                  name="tenantPreference"
                  value={preference}
                />{" "}
                {preference}
              </label>
            ))}
          </div>
          {errors.tenantPreference && <p className="text-red-500 text-sm">{errors.tenantPreference.message}</p>}
        </div>
        {/* Availability */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Availability
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            {Availability.map((availability, index) => (
              <label
                htmlFor={availability}
                className={
                  propertyAvailabilty===availability ? "cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
                  :"cursor-pointer bg-gray-300 text-sm rounded-full px-5 py-2 font-semibold"
                }
                key={index}
              >
                <input
                  {...register("availability",{
                    required:"This field is required"
                  })}
                  id={availability}
                  className="hidden"
                  type="radio"
                  name="availability"
                  value={availability}
                />{" "}
                {availability}
              </label>
            ))}
          </div>
          {errors.availability && <p className="text-red-500 text-sm">{errors.availability.message}</p>}
        </div>
        {/* Property Description */}
        <div className="flex flex-col w-full gap-5">
          <label htmlFor="propertyDescription" className="text-lg font-bold">
            Property Description
          </label>
          <textarea
            {...register("propertyDescription",{
              required:"This field is required"
            })}
            placeholder="Add description for your property to attract the best tenants"
            name="propertyDescription"
            id="propertyDescription"
            cols="30"
            rows="5"
            className="border-2 border-black p-3"
          ></textarea>
          {errors.propertyDescription && <p className="text-red-500 text-sm">{errors.propertyDescription.message}</p>}
        </div>
      </form>
    </div>
  );
};
export default PropertyDetailsSection;
