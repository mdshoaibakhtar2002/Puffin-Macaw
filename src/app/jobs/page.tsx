
'use client'
import Jobcard from '../../components/Jobcard';
import JobDetails from '../../components/JobDetails';
import Footer from '../../components/Footer';

export default function jobs() {
    return (
        <div className="max-h-[85vh]">
        <div className="w-full grid p-12 px-16 grid-cols-[38%_minmax(50%,_1fr)] gap-8">
            <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
            </div>
            <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                <JobDetails />
            </div>
        </div>
            <Footer/>
        </div>
    )
}