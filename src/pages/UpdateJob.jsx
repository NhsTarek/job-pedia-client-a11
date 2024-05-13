import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";


const UpdateJob = () => {
    const job = useLoaderData();
    const navigate = useNavigate();
    const {jobTitle, jobBanner, category,  salaryRange, postingDate, applicants, applicationDeadline,_id,  description,} = job;

    const {user} = useContext(AuthContext);
  
  
    const [startDate, setStartDate] = useState(new Date(applicationDeadline) || new Date());
    const handleUpdateJob = async e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const jobBanner = form.jobBanner.value;
        const name = form.userName.value;
        const email = form.userEmail.value;
        const category = form.jobCategory.value;
        const salaryRange = form.salaryRange.value;
        const postingDate = form.postingDate.value;
        const applicants = form.applicantsNumber.value;
        const applicationDeadline = startDate;
        const description = form.jobDescription.value;

        const jobData = {

            jobTitle,
            jobBanner,
            category,
            salaryRange,
            postingDate,
            applicants,
            applicationDeadline,
            description,
            buyer: {
                email,
                name,
                photo : user?.photoURL
            },


        }
         try{
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`, jobData)
            console.log(data);
            toast.success('updated job successfully')
            navigate('/my-jobs')

        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

   

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 font-poppins">
            <h2 className="text-2xl text-center font-bold mb-4">Update the current job</h2>
            <form onSubmit={handleUpdateJob}  className="space-y-4">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="jobBanner" className="block text-sm font-semibold mb-1">
                            Picture URL of the Job Banner
                        </label>
                        <input
                            type="text"
                            id="jobBanner"
                            name="jobBanner"
                            defaultValue={jobBanner}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter URL"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="jobTitle" className="block text-sm font-semibold mb-1">
                            Job Title
                        </label>
                        <input
                        defaultValue={jobTitle}
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                        required

                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter Job Title"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="userName" className="block text-sm font-semibold mb-1">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            defaultValue={user?.displayName}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            readOnly
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="userEmail" className="block text-sm font-semibold mb-1">
                            User Email
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            defaultValue={user?.email}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            readOnly
                        />
                    </div>
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="jobCategory" className="block text-sm font-semibold mb-1">
                        Job Category
                    </label>
                    <select
                        id="jobCategory"
                        name="jobCategory"
                        defaultValue={category}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    >
                        
                        <option value="On-Site">On-Site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Part-Time">Part-Time</option>
                    </select>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="salaryRange" className="block text-sm font-semibold mb-1">
                            Salary Range
                        </label>
                        <input
                            type="text"
                            id="salaryRange"
                            name="salaryRange"
                            defaultValue={salaryRange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter Salary Range"
                        required

                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="postingDate" className="block text-sm font-semibold mb-1">
                            Job Posting Date
                        </label>
                        <input
                            type="date"
                            id="postingDate"
                            name="postingDate"
                            defaultValue={postingDate}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required

                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="applicationDeadline" className="block text-sm font-semibold mb-1">
                            Application Deadline
                        </label>


                        <DatePicker className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="applicantsNumber" className="block text-sm font-semibold mb-1">
                            Job Applicants Number
                        </label>
                        <input
                            type="number"
                            id="applicantsNumber"
                            name="applicantsNumber"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            defaultValue="0"
                            readOnly
                        />
                    </div>
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="jobDescription" className="block text-sm font-semibold mb-1">
                        Job Description
                    </label>
                    <textarea
                        id="jobDescription"
                        name="jobDescription"
                        defaultValue={description}
                        className="w-full h-32 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter Job Description"
                        required

                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Update Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateJob;