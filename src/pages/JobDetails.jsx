import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";




const JobDetails = () => {
  const axiosSecure = useAxiosSecure()
  

 
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const job = useLoaderData();
  const { _id, jobTitle, category, postingDate, applicationDeadline, salaryRange, applicants, description,buyer, jobBanner } = job || {}

  const [startDate, setStartDate] = useState(new Date());
 


  const handleSubmit = async e =>{
    e.preventDefault();
   if(user?.email === buyer?.email) 
    return toast.error('can not apply in own job')
   
   
    const form = e.target;
    const jobId = _id;
    const postedBy = form.username.value;
    const email = user?.email;
    const deadline = startDate;
    const resume = form.resume.value;

    const bidData = {
      jobId,
      jobTitle,
      salaryRange,
      postedBy,
      description,
      email,
      category,
      deadline,
      resume, 
      buyer
    }
    console.table(bidData);





    try{
      const {data} = await axiosSecure.post(`/bid`, bidData)
      console.log(data);
      toast.success('Applied successfully')
      navigate('/applied-jobs')
      
      
    } catch (err){
      toast.error(err.response.data);
      e.target.reset();
      
      
    }

  }
  return (
    <div className="container bg-white mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Job Banner and Description */}
        <div className="lg:w-full lg:order-2 relative overflow-hidden font-poppins">
          <div className="bg-white   p-6 lg:p-8 z-10">
            <h2 className="text-2xl bg-[#F0F0FA] p-5 lg:text-3xl font-bold mb-4">Job Description</h2>
            <img className="object-center my-10 w-full h-64 rounded-lg lg:h-80" src={jobBanner} alt='' />
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
            
          </div>
        </div>

        {/* Job Overview Details */}
        <div className="lg:w-full border lg:order-1  relative overflow-hidden font-poppins">
          <div className="bg-white  shadow-md p-6 lg:p-8 z-10">
            <h2 className="text-2xl p-5 bg-[#F0F0FA] lg:text-3xl font-bold mb-4">Job Overview</h2>
            <ul>
              <li className="mb-4">
                <span className="font-bold mr-2">Category:</span>
                {category}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">Job Title:</span>
                {jobTitle}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">Posted By:</span>
                {buyer?.name}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">email:</span>
                {buyer?.email}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">Posting Date:</span>
                {new Date(postingDate).toLocaleDateString()}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">Application Deadline:</span>
                {new Date(applicationDeadline).toLocaleDateString()}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">Salary Range:</span>
                {salaryRange}
              </li>
              <li className="mb-4">
                <span className="font-bold mr-2">Applicants:</span>
                {applicants}
              </li>
            </ul>
            <a href="#my_modal_8" className="btn btn-block bg-blue-600">Apply Now</a>
            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
              <div className="modal-box py-28">
                <form onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                    <div>
                      <label className='text-gray-700 ' htmlFor='price'>
                        User Name
                      </label>
                      <input
                        id='price'
                        type='text'
                        name='username'
                        defaultValue={user?.displayName}
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                      />
                    </div>

                    <div>
                      <label className='text-gray-700 ' htmlFor='emailAddress'>
                        Email Address
                      </label>
                      <input
                        id='emailAddress'
                        type='email'
                        name='email'
                        defaultValue={user?.email}
                        disabled
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                      />
                    </div>

                    <div>
                      <label className='text-gray-700 ' htmlFor='resume link'>
                        Resume Link
                      </label>
                      <input
                        id='resume'
                        name='resume'
                        type='text'
                        required
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                      />
                    </div>
                    <div className='flex flex-col gap-2 '>
                      <label className='text-gray-700'>Deadline</label>

                      {/* Date Picker Input Field */}
                      <DatePicker className="border py-2 px-3 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>

                  <div className='flex justify-center mt-6'>
                    <button
                    
                    
                      type='submit'
                      className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                    >
                      Submit
                    </button>
                    
                  </div>
                </form>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;