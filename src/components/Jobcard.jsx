import { Link } from "react-router-dom";


const Jobcard = ({job}) => {
    const {_id, jobTitle, category, applicationDeadline,applicants, postedBy} = job;
    return (
        <div>
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400"><span>Deadline:</span>  {new Date(applicationDeadline).toLocaleDateString()}</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{category}</a>
                </div>

                <div className="mt-2">
                    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{jobTitle}</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300"><span>Salary Range: </span>$60,000 - $80,000 per year</p>
                    <p><span>Job Applicant Numbers:</span> {applicants}</p>
                </div>

                <div className="flex items-center justify-between mt-4">

                <div className="flex items-center">
                       
                        <a className="font-bold  text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link"><span>Posted By: </span>  {postedBy}</a>
                    </div>
                    <Link to={`/job/${_id}`} className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">View Details</Link>

                    
                </div>
            </div>

        </div>
    );
};

export default Jobcard;