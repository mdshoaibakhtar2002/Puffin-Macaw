'use client'
import Jobcard from '../../components/Jobcard';
import JobDetails from '../../components/JobDetails';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../Custom.module.css';
import JobCardSkelton from '@/components/JobCardSkelton';
import JobDetailsSkeleton from '@/components/JobDetailsSkeleton';
import Toast from '@/components/Toast';
import { useMyContext } from '../context/MyContext';
import { useEffect, useState } from 'react';

export default function jobs() {
    const { loadSkeleton, setLoadSkeleton } = useMyContext();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoadSkeleton('none');
        }, 500);

        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, [loadSkeleton]);

    return (
        <div className="max-h-[85vh]">
            <Navbar />
            <Toast isVisible={isVisible} setIsVisible={setIsVisible} />
            <div className="relative mt-2 w-full flex justify-end">
            </div>
            <div className="w-full grid md:flex-row p-4 sm:p-8 md:px-16 lg:p-10 md:grid-cols-[38%_minmax(50%,_1fr)] lg:grid-cols-[38%_minmax(50%,_1fr)] xl:grid-cols-[38%_minmax(50%,_1fr)] gap-8">
                <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                    {loadSkeleton === 'all' ? <JobCardSkelton /> : <Jobcard />}
                </div>
                <div className="max-h-[85vh] overflow-scroll no-scrollbar sm:none md:none lg:none xl:none">
                    {loadSkeleton === 'all' ? <JobDetailsSkeleton /> : <JobDetails />}
                </div>
            </div>
            <Footer />
        </div>
    );
}
