
'use client'
import Jobcard from '../../components/Jobcard';
import JobDetails from '../../components/JobDetails';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../Custom.module.css';

export default function jobs() {
    return (
        <div className="max-h-[85vh]">
            <Navbar/>
            <div className="relative mt-2 w-full flex justify-end">
                {/* <div className="relative rounded-md w-1/4 mr-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <input
                    id="searchbar"
                    name="searchbar"
                    placeholder="Search"
                    type="text"
                    className={styles.input}
                        />
                        <div className="cursor-pointer pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span className="text-gray-500 sm:text-sm cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </div>
                </div> */}
            </div>
            <div className="w-full grid md:flex-row p-4 sm:p-8 md:px-16 lg:p-10 md:grid-cols-[38%_minmax(50%,_1fr)] lg:grid-cols-[38%_minmax(50%,_1fr)] xl:grid-cols-[38%_minmax(50%,_1fr)] gap-8">
                <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                    <Jobcard />
                </div>
                <div className="max-h-[85vh] overflow-scroll no-scrollbar sm:none md:none lg:none xl:none">
                    <JobDetails />
                </div>
            </div>
            <Footer />
        </div>
    )
}