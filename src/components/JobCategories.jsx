import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobcard from './Jobcard';


import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const JobCategories = () => {
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()
    // const [jobs, setJobs] = useState([])



    const {data: jobs = [],} = useQuery({
        queryFn: () =>getData(),
        queryKey: ['jobs']
    })

    console.log(jobs);

    // useEffect(() =>{

        const getData = async() => {
           const {data} = await axiosSecure(`/jobs`)
           return data
        }
        // getData()
    // },[])
   
    return (

        <Tabs>
            <div className='container px-6 py-10 mx-auto font-poppins rounded-xl'>
                <div className=' text-center my-10 space-y-4'>
                    <p className=' text-blue-600'>Jobs Live Today</p>
                    <h1 className='  text-3xl  font-bold'>Browse Category</h1>
                    <p>Browse jobs conveniently categorized based on your preferences. Explore remote, on-site, part-time<br/>
                     and hybrid opportunities curated to match your skills and interests.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>On-Site</Tab>
                        <Tab> Remote</Tab>
                        <Tab> Hybrid</Tab>
                        <Tab> Part-Time</Tab>
                        <Tab> All Jobs  </Tab>
                    </TabList>
                </div>

                <TabPanel>
                   <div className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2'>
                   {
                        jobs.filter(j =>j.category=== 'On-Site').map(job =>
                            <Jobcard
                            key={job._id}
                            job={job}
                            
                            
                            ></Jobcard>
                        )
                    }
                   </div>
                </TabPanel>


                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2'>
                   {
                        jobs.filter(j =>j.category=== 'Remote').map(job =>
                            <Jobcard
                            key={job._id}
                            job={job}
                            
                            
                            ></Jobcard>
                        )
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2'>
                   {
                        jobs.filter(j =>j.category=== 'Hybrid').map(job =>
                            <Jobcard
                            key={job._id}
                            job={job}
                            
                            
                            ></Jobcard>
                        )
                    }
                   </div>
                </TabPanel>


                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2'>
                   {
                        jobs.filter(j =>j.category=== 'Part-Time').map(job =>
                            <Jobcard
                            key={job._id}
                            job={job}
                            
                            
                            ></Jobcard>
                        )
                    }
                   </div>
                </TabPanel>


                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2'>
                   {
                        jobs.map(job =>
                            <Jobcard
                            key={job._id}
                            job={job}
                            
                            
                            ></Jobcard>
                        )
                    }
                   </div>
                </TabPanel>
            </div>

        </Tabs>

    );
};

export default JobCategories;