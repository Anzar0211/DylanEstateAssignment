import { useFormContext } from "react-hook-form";

const PriceDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="w-full h-full">
      <form className="flex flex-col p-5 gap-7">
        <div className="flex flex-col mb-4 gap-5">
          <div className="flex md:flex-row flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="rent" className="font-semibold">
                Rent
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-0 ml-3">Rs</span>
                <input
                  type="number"
                  id="rent"
                  className="p-2 pl-10 pr-16 w-full border-2 border-black"
                  {...register("rent")}
                />
                <span className="absolute right-0 mr-3">/Month</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="security" className="font-semibold">
                Security
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-0 ml-3">Rs</span>
                <input
                  type="number"
                  id="security"
                  className="p-2 pl-10 pr-16 w-full border-2 border-black"
                  {...register("security")}
                />
                <span className="absolute right-0 mr-3">/Month</span>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="maintenance" className="font-semibold">
                Maintenance
              </label>
              <select
                id="maintenance"
                className="p-2 pl-3 pr-16 w-full border-2 border-black"
                {...register("maintenance")}
              >
                <option value="">Select</option>
                <option value="Included In Rent">Included In Rent</option>
                <option value="Extra Maintenance">Extra Maintenance</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 md:w-[46%] w-full">
              <label htmlFor="maintenanceAmount" className="font-semibold">
                Maintenance
              </label>
              <div className="flex justify-between">
                <div className="w-[46%]">
                  <div className="relative flex items-center">
                    <span className="absolute left-0 ml-3">Rs</span>
                    <input
                      type="number"
                      id="maintenanceAmount"
                      className="p-2 pl-10 md:pr-16 w-full border-2 border-black"
                      {...register("maintenanceAmount")}
                    />
                  </div>
                </div>
                <div className="w-[46%]">
                  <div className="flex items-center">
                    <select
                      id="duration"
                      className="p-2 pl-3 md:pr-16 w-full border-2 border-black"
                      {...register("duration")}
                    >
                      <option value="">Select</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <label
              htmlFor="additionalPricingDetails"
              className="text-lg font-bold"
            >
              Additional Pricing Details to Convey To Agent?
            </label>
            <textarea
              placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us."
              id="additionalPricingDetails"
              cols="30"
              rows="5"
              className="border-2 border-black p-3"
              {...register("additionalPricingDetails")}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PriceDetails;
