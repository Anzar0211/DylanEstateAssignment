import Header from "../components/Header"



const Greetings = () => {
    return (
        
        <div className='flex flex-col h-screen'>
            <Header/>
            <div className="flex flex-col m-5 p-4 gap-5">
                <h1 className="text-2xl font-semibold">Thank You For Listing your property with us</h1>
                <h2>Your listing will be reviewed and will go live within 24 hours</h2>
                <div>
                    <p>We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference</p>
                </div>
                <div>
                    <h4>-Dylan Estates</h4>
                </div>
                <div className="mt-5 flex justify-between md:w-2/5">
                    <button className="bg-custom-background-main text-white p-2 text-sm rounded-md">Edit Property Listing</button>
                    <button className="bg-custom-background-main text-white text-sm rounded-md">Preview Property Listing</button>
                </div>
            </div>
        </div>
    )
}
export default Greetings