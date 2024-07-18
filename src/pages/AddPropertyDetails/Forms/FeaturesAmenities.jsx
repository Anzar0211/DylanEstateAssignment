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
  const { register,formState:{errors} } = useFormContext();
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
              <input type="radio" name="nonVegAllowed" value="Allowed" {...register('isNonVegAllowed',{
                required: 'This field is required'
              })}/>{" "}
              Allowed
            </span>
            <span>
              <input type="radio" name="nonVegAllowed" value="Not Allowed" {...register('isNonVegAllowed',{
                required: 'This field is required'
              })}/>{" "}
              Not Allowed
            </span>
          </div>
          {errors.isNonVegAllowed && <p className="text-red-500 text-sm">{errors.isNonVegAllowed.message}</p>}
        </div>
        <div className="flex flex-col gap-3 md:w-2/5 w-3/5">
          <label htmlFor="" className="text-md font-bold">
            Pets Allowed
          </label>
          <div className="gap-10 flex justify-between">
            <span className="mr-5">
              <input type="radio" name="petsAllowed" value="Yes" {...register('petsAllowed',{
                required: 'This field is required'
              })}/> Yes
            </span>
            <span>
              <input type="radio" name="petsAllowed" value="No" {...register('petsAllowed',{
                required: 'This field is required'
              })}/> No
            </span>
          </div>
          {errors.petsAllowed && <p className="text-red-500 text-sm">{errors.petsAllowed.message}</p>}
        </div>
        <div className="flex flex-col gap-3  md:w-2/5 w-full">
          <label htmlFor="Rare/No Powercut" className="text-md font-bold">
            Electricity
          </label>
          <div className="gap-10 flex justify-between">
            <span className="mr-5">
              <input id='Rare/No Powercut' type="radio" name="Rare/No Powercut" value="Rare/No Powercut" {...register('electricity',{
                required: 'This field is required'
              })}/>{" "}
              Rare/No Powercut
            </span>
            <span>
              <input type="radio" name="frequent" value="Frequent Powercut" {...register('electricity',{
                required: 'This field is required'
              })}/>{" "}
              Frequent Powercut
            </span>
          </div>
          {errors.electricity && <p className="text-red-500 text-sm">{errors.electricity.message}</p>}
        </div>
        <div className="flex flex-col gap-3 w-3/5">
          <label htmlFor="" className="text-md font-bold">
            Water Supply
          </label>
          <div className="gap-10 flex justify-between">
            <span>
              <input
                type="radio"
                name="Municipal Corporation(BMC)"
                value="Municipal Corporation(BMC)"
                {...register('waterSupply',{
                  required: 'This field is required'
                })}
              />{" "}
              Municipal Corporation(BMC)
            </span>
            <span>
              <input type="radio" name="Borewell" value="Borewell" {...register('waterSupply',{
                required: 'This field is required'
              })}/> Borewell
            </span>
            <span>
              <input type="radio" name="Both" value="Both" {...register('waterSupply',{
                required: 'This field is required'
              })}/> Both
            </span>
          </div>
          {errors.waterSupply && <p className="text-red-500 text-sm">{errors.waterSupply.message}</p>}
        </div>


        <div className="flex flex-col gap-3 w-3/5">
          <label htmlFor="furnishing" className="text-md font-bold">
            Furnishing
          </label>
          <div className="gap-10 flex justify-between">
            <span>
              <input id="furnishing" {...register('furnishing',{
                required: 'This field is required'
              })} type="radio" name="furnishing" value="Fully Furnished" /> Fully
              Furnished
            </span>
            <span>
              <input {...register('furnishing',{
                required: 'This field is required'
              })} type="radio" name="furnishing" value="Semi Furnished" /> Semi
              Furnished
            </span>
            <span>
              <input {...register('furnishing',{
                required: 'This field is required'
              })} type="radio" name="furnishing" value="Unfurnished" /> Unfurnished
            </span>
          </div>
          {errors.furnishing && <p className="text-red-500 text-sm">{errors.furnishing.message}</p>}
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
                  {...register(`additionalFeatures`,{
                            validate:(facilities)=>{
                                if(facilities && facilities.length>0){
                                    return true
                                }
                                else{
                                    return "Select at least one facility"
                                }
                            }
                  })}
                />{" "}
                {feature}
              </span>
            ))}
          </div>
          {errors.additionalFeatures && <p className="text-red-500 text-sm">{errors.additionalFeatures.message}</p>}
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
                  {...register(`tiles`,{
                      validate:(tiles)=>{
                            if(tiles && tiles.length>0){
                                return true
                            }
                            else{
                                return "Select at least one Tile Type"
                            }
                        }
                  })}
                />{" "}
                {type}
              </span>
            ))}
          </div>
          {errors.tiles && <p className="text-red-500 text-sm">{errors.tiles.message}</p>}
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
                  {...register(`safety`,{
                      validate:(safety)=>{
                            if(safety && safety.length>0){
                                return true
                            }
                            else{
                                return "Select at least one Safety Type"
                            }
                        }

                  })}
                />{" "}
                {type}
              </span>
            ))}
          </div>
          {errors.safety && <p className="text-red-500 text-sm">{errors.safety.message}</p>}
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
                    {...register(`socialAmenities`,{
                        validate:(amenities)=>{
                            if(amenities && amenities.length>0){
                                return true
                            }
                            else{
                                return "Select at least one Social Amenity"
                            }
                        }
                    })}
                  />
                </div>
              </span>
            ))}
          </div>
          {errors.socialAmenities && <p className="text-red-500 text-sm">{errors.socialAmenities.message}</p>}
        </div>
      </form>
    </div>
  );
};
export default FeaturesAmenities;
