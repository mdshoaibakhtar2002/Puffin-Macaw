
'use client'
import Jobcard from '../../components/Jobcard';

export default function jobs() {
    return (
        <div className="w-full grid p-12 px-16 grid-cols-[38%_minmax(50%,_1fr)] gap-8">
            <div className="">
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
            </div>
            <div className="">
                <Jobcard />
            </div>
        </div>
    )
}