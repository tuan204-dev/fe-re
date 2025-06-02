'use client'
import ChatDrawer from '@/components/messages/ChatDrawer'
import JobCard from '@/components/messages/JobCard'
import MainChat from '@/components/messages/MainChat'
import WorkerProfileDrawer from '@/components/WorkerProfileDrawer'
import { JobType, RecruitingStatus } from '@/constants/enum'
import { useJobs } from '@/hooks/job'
import { updateSelectedJob } from '@/redux/slices/jobSlice'
import { updateRecruiting, updateSelectedWorker } from '@/redux/slices/recruitingSlice'
import { useAppSelector } from '@/redux/store'
import { IJob } from '@/types/job'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    FaPlus,
    FaSearch
} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { z } from 'zod'

const schema = z.object({
    title: z.string().optional(),
    recruitingStatus: z.string().optional(),
    jobType: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const MessagePage = () => {
    const dispatch = useDispatch()
    const selectedRecruiting = useAppSelector(state => state.recruiting.selectedRecruiting)
    const selectedWorker = useAppSelector(state => state.recruiting.selectedWorker)
    const [filterData, setFilterData] = useState({})
    const { jobs, } = useJobs(filterData)
    const { register, watch } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
            recruitingStatus: '-1',
            jobType: '-1'
        }
    })

    const formData = watch()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const cleanedData = {
                title: formData.title?.trim() || '',
                recruitingStatus: formData.recruitingStatus === '-1' ? undefined : formData.recruitingStatus,
                jobType: formData.jobType === '-1' ? undefined : formData.jobType
            }

            setFilterData(cleanedData)
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [formData.title, formData.recruitingStatus, formData.jobType])

    const handleClickJob = (job: IJob) => {
        dispatch(updateSelectedJob(job))
    }

    const handleCloseChat = () => {
        dispatch(updateRecruiting(null))
    }

    const handleCloseWorkerProfile = () => {
        dispatch(updateSelectedWorker(null))
    }

    return (
        <div>
            <ChatDrawer isOpen={!!selectedRecruiting} onClose={handleCloseChat} />
            <WorkerProfileDrawer isOpen={!!selectedWorker} onClose={handleCloseWorkerProfile} />
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <div
                    id="sidebar"
                    className="sidebar bg-white w-80 border-r border-gray-200 flex flex-col"
                >
                    {/* <div className="p-4 border-b border-gray-200">
                        <h1 className="text-xl font-bold text-gray-800">RecruitPro</h1>
                        <p className="text-sm text-gray-500">Manage your candidates</p>
                    </div> */}
                    {/* Search and Filter */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative mb-3">
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                {...register('title')}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <div className="flex space-x-2">
                            <select {...register('recruitingStatus')} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                                <option value={'-1'}>All Status</option>
                                <option value={RecruitingStatus.DRAFT}>Draft</option>
                                <option value={RecruitingStatus.PUBLIC}>Public</option>
                                <option value={RecruitingStatus.PAUSED}>Pause</option>
                                <option value={RecruitingStatus.CLOSED}>Close</option>
                            </select>
                            <select {...register('jobType')} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                                <option value={'-1'}>All Types</option>
                                <option value={JobType.FULL_TIME}>Full time</option>
                                <option value={JobType.PART_TIME}>Part time</option>
                                <option value={JobType.FREELANCE}>Freelance</option>
                                <option value={JobType.CONTRACT}>Contract</option>
                            </select>
                        </div>
                    </div>
                    {/* Job List */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide p-2">
                        <div className="space-y-2">
                            {
                                jobs.map((job) => (<JobCard onClick={handleClickJob} key={job._id} job={job} />))
                            }
                        </div>
                    </div>
                    {/* Add New Job Button */}
                    <div className="p-4 border-t border-gray-200">
                        <Link href={'/job/create'} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-200">
                            <FaPlus className="mr-2" />
                            <span>Post New Job</span>
                        </Link>
                    </div>
                </div>
                {/* Main Content */}
                <MainChat />
            </div>
        </div>
    )
}

export default MessagePage