import { useFormContext } from 'react-hook-form';
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiCctv } from "react-icons/bi";
import { PiElevatorLight } from "react-icons/pi";
import { FaCarAlt, FaWarehouse, FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import {
  LuCable,
  LuRollerCoaster,
  LuTreeDeciduous,
  LuDumbbell,
} from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { IoIosBicycle } from "react-icons/io";
import { TbBuildingStore } from "react-icons/tb";
import { MdPool } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const additionalFeatures = [
  "Air Conditioning",
  "Ceiling Fans",
  "Refrigerator",
  "Washing Machine",
  "Microwave",
  "Oven",
];

const Tiles = ["Normal White Tiles", "Marble", "Vitrified Tiles"];

const SafetyTypes = [
  "24/7 Security Personnel(Gated Security)",
  "Security Systems-CCTV",
];

const SocialAmenities = [
  {
    icon: <GiPoliceOfficerHead className="text-2xl" />,
    description: "24/7 Security",
  },
  { icon: <BiCctv className="text-2xl" />, description: "CCTV Camera" },
  { icon: <PiElevatorLight />, description: "Lift" },
  { icon: <FaCarAlt />, description: "Reserved Parking" },
  { icon: <IoIosWater />, description: "Regular Water Supply" },
  { icon: <LuCable />, description: "Power Back up-partial" },
  { icon: <LuCable />, description: "Power Back up-full" },
  { icon: <GrUserWorker />, description: "Maintenance Staff" },
  { icon: <LuTreeDeciduous />, description: "Park/Garden" },
  { icon: <LuRollerCoaster />, description: "Kids Play Area" },
  { icon: <IoIosBicycle />, description: "Sport" },
  { icon: <LuDumbbell />, description: "Property Gym" },
  { icon: <FaWarehouse />, description: "Community Hall" },
  { icon: <TbBuildingStore />, description: "Shopping Center" },
  { icon: <FaWarehouse />, description: "Club House" },
  { icon: <MdPool />, description: "Swimming Pool" },
  { icon: <BsFillTelephoneFill />, description: "Intercom" },
  { icon: <FaFire />, description: "Fire Safety" },
];

const FeaturesAmenities = () => {
  const { register } = useFormContext();
  return (
    <div className="w-full h-full">
      <form action="" className="flex flex-col p-5 gap-9 ">
        <h2 className="font-bold">General Features</h2>
        <div className="flex flex-col gap-3 md:w-2/5 w-full">
          <label htmlFor="" className="text-md font-bold">
            Non-Veg
          </label>
          <div className="gap-10 flex justify-between">
            <span className="mr-5">
              <input type="radio" name="nonVegAllowed" value="Allowed" {...register('nonVegAllowed')}/>{" "}
              Allowed
            </span>
            <span>
              <input type="radio" name="nonVegAllowed" value="Not Allowed" {...register('nonVegAllowed')}/>{" "}
              Not Allowed
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:w-2/5 w-3/5">
          <label htmlFor="" className="text-md font-bold">
            Pets Allowed
          </label>
          <div className="gap-10 flex justify-between">
            <span className="mr-5">
              <input type="radio" name="petsAllowed" value="Yes" {...register('petsAllowed')}/> Yes
            </span>
            <span>
              <input type="radio" name="petsAllowed" value="No" {...register('petsAllowed')}/> No
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3  md:w-2/5 w-full">
          <label htmlFor="defaultEl" className="text-md font-bold">
            Electricity
          </label>
          <div className="gap-10 flex justify-between">
            <span className="mr-5">
              <input id='defaultEl' type="radio" name="rare/no" value="Rare/No Powercut" {...register('electricity')}/>{" "}
              Rare/No Powercut
            </span>
            <span>
              <input type="radio" name="frequent" value="Frequent Powercut" {...register('electricity')}/>{" "}
              Frequent Powercut
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-3/5">
          <label htmlFor="" className="text-md font-bold">
            Water Supply
          </label>
          <div className="gap-10 flex justify-between">
            <span>
              <input
                type="radio"
                name="MC/BMC"
                value="Municipal Corporation(BMC)"
                {...register('waterSupply')}
              />{" "}
              Municipal Corporation(BMC)
            </span>
            <span>
              <input type="radio" name="borewell" value="Borewell" {...register('waterSupply')}/> Borewell
            </span>
            <span>
              <input type="radio" name="both" value="Both" {...register('waterSupply')}/> Both
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-3/5">
          <label htmlFor="furnishing" className="text-md font-bold">
            Furnishing
          </label>
          <div className="gap-10 flex justify-between">
            <span>
              <input id="furnishing" {...register('furnishing')} type="radio" name="Fully
              Furnished" value="Fully Furnished" /> Fully
              Furnished
            </span>
            <span>
              <input {...register('furnishing')} type="radio" name="Semi Furnished" value="Semi Furnished" /> Semi
              Furnished
            </span>
            <span>
              <input {...register('furnishing')} type="radio" name="Unfurnished" value="Unfurnished" /> Unfurnished
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-3/5 w-full">
          <label htmlFor="" className="text-md font-bold">
            Additional Features
          </label>
          <div className="gap-8 flex justify-start items-center flex-wrap">
            {additionalFeatures.map((feature, index) => (
              <span className="mr-5" key={index}>
                <input
                  type="checkbox"
                  className="mr-3"
                  name={feature}
                  value={feature}
                  {...register(`additionalFeatures.${feature}`)}
                />{" "}
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-3/5 w-full">
          <label htmlFor="" className="text-md font-bold">
            Tiles
          </label>
          <div className="gap-8 flex justify-between items-center flex-wrap">
            {Tiles.map((type, index) => (
              <span className="mr-5" key={index}>
                <input
                  type="checkbox"
                  className="mr-3"
                  name={type}
                  value={type}
                  {...register(`tiles.${type}`)}
                />{" "}
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-3/5 w-full">
          <label htmlFor="" className="text-md font-bold">
            Safety
          </label>
          <div className="gap-8 flex justify-between items-center flex-wrap">
            {SafetyTypes.map((type, index) => (
              <span className="mr-5" key={index}>
                <input
                  type="checkbox"
                  className="mr-3"
                  name={type}
                  value={type}
                  {...register(`safety.${type}`)}
                />{" "}
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7 w-full">
          <label htmlFor="" className="text-md font-bold">
            Social Amenities
          </label>
          <div className="gap-8 flex md:justify-start justify-between items-center flex-wrap">
            {SocialAmenities.map((amenity, index) => (
              <span
                className="flex flex-col items-center md:w-1/5 w-2/5 p-2"
                key={index}
              >
                <div className="text-2xl">{amenity.icon}</div>
                <span className="whitespace-nowrap">{amenity.description}</span>
                <div>
                  <input
                    type="checkbox"
                    className=""
                    name={amenity.description}
                    value={amenity.description}
                    {...register(`socialAmenities.${amenity.description}`)}
                  />
                </div>
              </span>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
export default FeaturesAmenities;
