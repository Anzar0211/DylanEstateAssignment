import React, { useMemo,useState } from 'react'
import {useForm} from 'react-hook-form'
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Tick from '../../assets/Tick.svg'
import {useNavigate} from 'react-router-dom'


const ListItemWithTick = ({ children }) => (
    <li className="flex items-center gap-1">
        <img src={Tick} alt="Tick" className="w-10 h-10" />
        {children}
    </li>
);

const Content = () => {
    const navigate = useNavigate();
    const{register,watch,handleSubmit,formState:{errors}}=useForm();
    const[showOtpForm,setShowOtpForm]=useState(false)
    const options = useMemo(() => countryList().getData(), [])
    const [value, setValue] = useState({ value: 'IN', label: 'India' })
    const[isVerified,setIsVerified]=useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const changeHandler = value => {
        setValue(value)
    }
    const onSubmitDetailsForm = (data) => {
        console.log(data)
        setPhoneNumber(data.phoneNumber)
        setShowOtpForm(true);
        
    }

    const onSubmitOtpForm = otpData => {
        console.log(otpData);
        console.log('Verified');
        setTimeout(()=>{
            setIsVerified(true)
            setTimeout(()=>{
                navigate('/addProperty')
            },2000)
        },2000)
    };

    return (
        <div className='md:flex-1 flex flex-col overflow-y-auto bg-custom-background-main p-6'>
            {/* Content Header and description */}
            <div className='container mx-auto px-6 md:px-10 py-8 flex-1'>
                <div className='flex flex-col gap-3 w-full md:w-3/5'>
                    <h1 className='text-white text-3xl font-bold'>
                        Sell or Rent your Property For Free
                    </h1>
                    <div>
                        <p className='text-white font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam omnis natus velit at libero, temporibus illum </p>
                    </div>   
                </div>
            </div>
            {/* Features Section */}
            <div className='container mx-auto px-6 md:px-20 py-2 flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-2/5'>
                    <h2 className='text-xl text-white'>Upload your property in 4 simple steps</h2>
                    <ul className='text-white list-inside list-none py-5'>
                        <ListItemWithTick>
                            <span>
                                Add your properties 
                                <strong> Basic Details</strong>
                            </span> 
                        </ListItemWithTick>
                        <ListItemWithTick>
                            <span>
                                Add Property
                                <strong> Location</strong>
                            </span>
                        </ListItemWithTick>
                        <ListItemWithTick><span>Add Property 
                            <strong> Features and Amenities</strong>
                            </span>
                        </ListItemWithTick>
                        <ListItemWithTick>
                            <span> Add Price 
                                <strong> Details</strong>
                            </span>
                        </ListItemWithTick>
                        <ListItemWithTick>
                            <span>
                                Add your best 
                                <strong> Property Shots</strong>
                            </span>
                        </ListItemWithTick>
                    </ul>
                </div>

                {/* Registration form */}
                <div className='w-full md:w-3/5 bg-white flex flex-col px-5 rounded-md h-[45vh]'>
                    <div className='bg-custom-registration-form-header p-4 flex ml-5'>
                        <h2 className='font-bold text-xl'>Let's Get You started!</h2>
                    </div>
                    {!showOtpForm ? 
                        (<div className='flex-grow overflow-y-auto'>
                            <form id="myForm" className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmitDetailsForm)}>
                                <h2>I am :</h2>
                                <div className='flex gap-5 flex-start items-center'>
                                    <div className='flex items-center gap-1'>
                                        <label htmlFor="owner">Owner</label>
                                        <input id='owner' type='radio' {...register('userType', { required: true })} value='Owner' />
                                        {errors.userType && <span>This field is required</span>}
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <label htmlFor="builder">Builder</label>
                                        <input id='builder' type='radio' {...register('userType', { required: true })} value='Builder' />
                                        {errors.userType && <span>This field is required</span>}
                                    </div>
                                </div>
                                <label htmlFor='name'>Your Name</label>
                                <input id='name' type='text' placeholder='Name' {...register('name', { required: true })} className='md:p-3 border border-gray-300' />
                                {errors.name && <span>This field is required</span>}
                                <label htmlFor="country-select">Country</label>
                                <Select options={options} value={value} onChange={changeHandler} />
                                <label htmlFor='phone'>Phone Number</label>
                                <input id='phone' type='text' placeholder='Phone Number' {...register('phoneNumber', { required: true })} className='md:p-3 border border-gray-300' />
                                {errors.phoneNumber && <span>This field is required</span>}
                                <div>OR</div>
                                <label htmlFor='email'>Email</label>
                                <input id='email' type='email' placeholder='Email' {...register('email', { required: true })} className='md:p-3 border border-gray-300' />
                                {errors.email && <span>This field is required</span>}
                            </form>
                        </div>) : (
                            <div className='w-full md:w-4/5 bg-white flex flex-col px-5 rounded-md h-[45vh]'>
                                {/* OTP form */}
                                <form id="otpForm" className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmitOtpForm)}>
                                    <label htmlFor='otp'>Enter OTP sent on {phoneNumber}</label>
                                    <input id='otp' type='text' placeholder='OTP' {...register('otp', { required: true })} className='p-3 border border-gray-300' />
                                    {errors.otp && <span>This field is required</span>}
                                </form>
                                <div >
                                    {isVerified && (
                                        <div className='text-green-500 font-bold'>Verified!!</div>
                                    )}
                                </div>
                            </div>                            
                        )
                        
                    
                    }
                    <div className='flex items-center justify-between bg-custom-registration-form-header p-3 mt-8'>
                        <div className='text-sm'>Need Help? 
                            <span className='font-bold'> Call 99999999999
                            </span>    
                        </div>
                        <button type="submit" form={showOtpForm? "otpForm" : "myForm"} className='text-white bg-black px-5 rounded-md'>NEXT</button>
                    </div>                    
                </div>
            </div> 
        </div>
    )
}

export default Content



