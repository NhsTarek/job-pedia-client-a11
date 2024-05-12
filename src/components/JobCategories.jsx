import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobcard from './Jobcard';

const JobCategories = () => {
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
                    <h2><Jobcard></Jobcard></h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </div>

        </Tabs>

    );
};

export default JobCategories;