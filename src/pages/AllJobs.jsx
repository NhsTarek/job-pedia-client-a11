
import Jobcard from "../components/Jobcard"
import useAxiosSecure from "../hooks/useAxiosSecure"
import { useEffect, useState } from "react"


const AllJobs = () => {
    const axiosSecure = useAxiosSecure()
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentPage,setCurrentPage] = useState(1);
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')

    const [jobs, setJobs] = useState([])

    useEffect(() =>{
        const getData = async () =>{
            const {data} = await axiosSecure(`/all-jobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`);
            setJobs(data)
        }
        getData()
      }, [currentPage, filter, itemsPerPage, search, sort ])


    useEffect(() =>{
        const getCount = async () =>{
            const {data} = await axiosSecure(`/jobs-count?filter=${filter}&search=${search}`)
            setCount(data.count)
        }
        getCount()
    }, [filter,search])

    console.log(count);
  


const numberOfPages = Math.ceil(count/itemsPerPage);

  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
 

  const handlePaginationBtn = (value ) =>{
    console.log(value);
    setCurrentPage(value)
   
  

  }
  const handleReset = () =>{
    setFilter('')
    setSort('')
    setSearch('')
    setSearchText('')
  }

  const handleSearch = (e) =>{
     e.preventDefault()
     
     setSearch(searchText)
  }

  console.log(search);
  return (
    <div className='container mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-100'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
          <div>
            <select
              name='category'
              id='category'
              onChange={e => {
                setFilter(e.target.value)
                setCurrentPage(1)
              }
              
              }
              value={filter}
              className='border p-4 rounded-lg bg-white shadow-md'
            >
              <option value=''>Filter By Category</option>
              <option value='On-Site'>On-Site</option>
              <option value='Remote'>Remote</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Part-Time'>Part-Time</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg shadow-md bg-white focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-transparent outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={(e) =>setSearchText(e.target.value)}
                value={searchText}
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />
              <button className='px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none'>
                Search
              </button>
            </div>
          </form>

          <div>
            <select
            onChange={e => {
              setSort(e.target.value)
              setCurrentPage(1)
            }
            
            }
            value={sort}
              name='sort'
              id='sort'
              
              className='border p-4 rounded-md bg-white shadow-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className='btn bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500'>
            Reset
          </button>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2'>
          {jobs.map(job => (
            <Jobcard key={job._id} job={job} />
          ))}
        </div>
      </div>

      <div className='flex justify-center mt-12'>
        <button 
        onClick={() =>handlePaginationBtn(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-4 py-2 mx-1 text-gray-700 capitalize bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white disabled:text-gray-500 disabled:bg-gray-200 disabled:cursor-not-allowed'>
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>Previous</span>
          </div>
        </button>

        {pages.map(btnNum => (
          <button
          onClick={() =>handlePaginationBtn(btnNum)}
            key={btnNum}
            className='hidden px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md shadow-md sm:inline hover:bg-blue-500 hover:text-white'
          >
            {btnNum}
          </button>
        ))}

        <button onClick={() =>handlePaginationBtn(currentPage + 1)}
         disabled={currentPage === numberOfPages}
         className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed'>
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AllJobs