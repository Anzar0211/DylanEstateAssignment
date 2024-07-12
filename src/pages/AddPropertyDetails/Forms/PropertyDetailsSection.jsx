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

const PropertyDetailsSection = () => {
  const { register, watch, setValue } = useFormContext();
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedSubTypes, setSelectedSubTypes] = useState([]);

  const propertyType = watch("propertyType");

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
              <input type="radio" {...register("propertyFor")} value="Rent" />{" "}
              Rent
            </span>
            <span>
              <input type="radio" {...register("propertyFor")} value="Sale" />{" "}
              Sale
            </span>
          </div>
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
                  {...register("propertyArea")}
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
            </div>
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="carpetAreaInput" className="font-semibold">
                Carpet Area :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyArea")}
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
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-3 md:w-1/5 w-4/5">
              <label htmlFor="PropertyFloor" className="font-semibold">
                Property on Floor :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyFloor")}
                  type="number"
                  id="PropertyFloor"
                  placeholder="Floor"
                  className="p-2 pl-3 pr-16 w-full border-2 border-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-1/5 w-4/5">
              <label htmlFor="TotalFloors" className="font-semibold">
                Total Floors :
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("propertyFloor")}
                  type="number"
                  id="TotalFloors"
                  placeholder="Total Floors"
                  className="p-2 pl-3 pr-16 w-full border-2 border-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-2/5 w-4/5">
              <label htmlFor="PropertyFacing" className="font-semibold">
                Property Facing :
              </label>
              <select
                {...register("propertyFacing")}
                id="PropertyFacing"
                className="p-2 pl-3 pr-16 w-full border-2 border-black"
              >
                <option value="">Select</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="West">West</option>
                <option value="East">East</option>
              </select>
            </div>
          </div>
        </div>
        {/* Property Age */}
        <div className="flex flex-col w-full  gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Property Age
          </label>
          <div className="flex md:flex-nowrap flex-wrap gap-5 justify-between">
            <label
              htmlFor="<1"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-4/5 md:w-auto"
            >
              <input
                {...register("propertyAge")}
                id="<1"
                className="hidden"
                type="radio"
                name="propertyAge"
                value="Less than 1 year"
              />{" "}
              Less than 1 year
            </label>
            <label
              htmlFor="1-3"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-4/5 md:w-auto"
            >
              <input
                {...register("propertyAge")}
                id="1-3"
                className="hidden"
                type="radio"
                name="propertyAge"
                value="1 - 3 years"
              />{" "}
              1 - 3 years
            </label>
            <label
              htmlFor="3-5"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-4/5 md:w-auto"
            >
              <input
                {...register("propertyAge")}
                id="3-5"
                className="hidden"
                type="radio"
                name="propertyAge"
                value="3 - 5 Years"
              />{" "}
              3 - 5 Years
            </label>
            <label
              htmlFor="5-10"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-4/5 md:w-auto"
            >
              <input
                {...register("propertyAge")}
                id="5-10"
                className="hidden"
                type="radio"
                name="propertyAge"
                value="5 - 10 Years"
              />{" "}
              5 - 10 Years
            </label>
            <label
              htmlFor=">10"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-4/5 md:w-auto"
            >
              <input
                {...register("propertyAge")}
                id=">10"
                className="hidden"
                type="radio"
                name="propertyAge"
                value="Greater than 10 Years"
              />{" "}
              Greater than 10 Years
            </label>
          </div>
        </div>
        {/* Property BHK */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            BHK Type
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            <label
              htmlFor="1RK"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto w-2/5"
            >
              <input
                {...register("propertyRoom")}
                id="1RK"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="1 RK"
              />{" "}
              1 RK
            </label>
            <label
              htmlFor="1BHK"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto w-2/5"
            >
              <input
                {...register("propertyRoom")}
                id="1BHK"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="1 BHK"
              />{" "}
              1 BHK
            </label>
            <label
              htmlFor="2BHK"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto w-2/5"
            >
              <input
                {...register("propertyRoom")}
                id="2BHK"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="2 BHK"
              />{" "}
              2 BHK
            </label>
            <label
              htmlFor="3BHK"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto w-2/5"
            >
              <input
                {...register("propertyRoom")}
                id="3BHK"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="3 BHK"
              />{" "}
              3 BHK
            </label>
            <label
              htmlFor="4BHK"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto w-2/5"
            >
              <input
                {...register("propertyRoom")}
                id="4BHK"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="4 BHK"
              />{" "}
              4 BHK
            </label>
            <label
              htmlFor="5+BHK"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto w-2/5"
            >
              <input
                {...register("propertyRoom")}
                id="5+BHK"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="5+ BHK"
              />{" "}
              5+ BHK
            </label>
          </div>
        </div>
        {/* Property Bath/Toilets */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Bathrooms/Toilets
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            <label
              htmlFor="0"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="0"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="0"
              />{" "}
              0
            </label>
            <label
              htmlFor="1"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="1"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="1"
              />{" "}
              1
            </label>
            <label
              htmlFor="2"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="2"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="2"
              />{" "}
              2
            </label>
            <label
              htmlFor="3"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="3"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="3"
              />{" "}
              3
            </label>
            <label
              htmlFor="4"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="4"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="4"
              />{" "}
              4
            </label>
            <label
              htmlFor="5"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="5"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="5"
              />{" "}
              5
            </label>
            <label
              htmlFor="6+"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBath")}
                id="6+"
                className="hidden"
                type="radio"
                name="propertyBHK"
                value="6+"
              />{" "}
              6+
            </label>
          </div>
        </div>
        {/* Property Balconies */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Balcony
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            <label
              htmlFor="0"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBalconies")}
                id="0"
                className="hidden"
                type="radio"
                name="propertyBalcony"
                value="0"
              />{" "}
              0
            </label>
            <label
              htmlFor="1"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBalconies")}
                id="1"
                className="hidden"
                type="radio"
                name="propertyBalcony"
                value="1"
              />{" "}
              1
            </label>
            <label
              htmlFor="2"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBalconies")}
                id="2"
                className="hidden"
                type="radio"
                name="propertyBalcony"
                value="2"
              />{" "}
              2
            </label>
            <label
              htmlFor="3"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBalconies")}
                id="3"
                className="hidden"
                type="radio"
                name="propertyBalcony"
                value="3"
              />{" "}
              3
            </label>
            <label
              htmlFor="4"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold w-2/5 md:w-auto"
            >
              <input
                {...register("propertyBalconies")}
                id="4"
                className="hidden"
                type="radio"
                name="propertyBalcony"
                value="4+"
              />{" "}
              4+
            </label>
          </div>
        </div>
        {/* Tenant Preference */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Tenant Preference
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            <label
              htmlFor="any"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
            >
              <input
                {...register("propertyTenants")}
                id="any"
                className="hidden"
                type="radio"
                name="tenantType"
                value="Any"
              />{" "}
              Any
            </label>
            <label
              htmlFor="family"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
            >
              <input
                {...register("propertyTenants")}
                id="family"
                className="hidden"
                type="radio"
                name="tenantType"
                value="Family"
              />{" "}
              Family
            </label>
            <label
              htmlFor="bachelor-man"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
            >
              <input
                {...register("propertyTenants")}
                id="bachelor-man"
                className="hidden"
                type="radio"
                name="tenantType"
                value="Bachelor (Man)"
              />{" "}
              Bachelor (Man)
            </label>
            <label
              htmlFor="bachelor-woman"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold"
            >
              <input
                {...register("propertyTenants")}
                id="bachelor-woman"
                className="hidden"
                type="radio"
                name="tenantType"
                value="Bachelor (Woman)"
              />{" "}
              Bachelor (Woman)
            </label>
          </div>
        </div>
        {/* Availability */}
        <div className="flex flex-col w-full gap-5 mb-4">
          <label htmlFor="" className="text-lg font-bold">
            Availability
          </label>
          <div className="flex md:justify-start md:flex-nowrap flex-wrap gap-5 justify-between">
            <label
              htmlFor="immediate"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto"
            >
              <input
                {...register("propertyAvailability")}
                id="immediate"
                className="hidden"
                type="radio"
                name="Immediate"
                value="Immediate"
              />{" "}
              Immediate
            </label>
            <label
              htmlFor="15D"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto"
            >
              <input
                {...register("propertyAvailability")}
                id="15D"
                className="hidden"
                type="radio"
                name="within 15 Days"
                value="within 15 Days"
              />{" "}
              within 15 Days
            </label>
            <label
              htmlFor="1M"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto"
            >
              <input
                {...register("propertyAvailability")}
                id="1M"
                className="hidden"
                type="radio"
                name="within 1 month"
                value="within 1 month"
              />{" "}
              within 1 month
            </label>
            <label
              htmlFor="2M"
              className="cursor-pointer bg-blue-300 text-sm rounded-full px-5 py-2 font-semibold md:w-auto"
            >
              <input
                {...register("propertyAvailability")}
                id="2M"
                className="hidden"
                type="radio"
                name="within 2 months"
                value="within 2 months"
              />{" "}
              within 2 months
            </label>
          </div>
        </div>
        {/* Property Description */}
        <div className="flex flex-col w-full gap-5">
          <label htmlFor="" className="text-lg font-bold">
            Property Description
          </label>
          <textarea
            {...register("propertyDescription")}
            placeholder="Add description for your property to attract the best tenants"
            name=""
            id=""
            cols="30"
            rows="5"
            className="border-2 border-black p-3"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
export default PropertyDetailsSection;
