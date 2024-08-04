
'use client'
import Jobcard from '../../components/Jobcard';
import JobDetails from '../../components/JobDetails';
import Footer from '../../components/Footer';

export default function jobs() {
    return (
        <div className="max-h-[85vh]">
            <div className="w-full grid md:flex-row p-4 sm:p-8 md:px-16 lg:p-10 md:grid-cols-[38%_minmax(50%,_1fr)] lg:grid-cols-[38%_minmax(50%,_1fr)] xl:grid-cols-[38%_minmax(50%,_1fr)] gap-8">
                <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
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