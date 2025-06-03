import { updateRecruiting, updateSelectedWorker } from '@/redux/slices/recruitingSlice';
import { IRecruiting } from '@/types/job';
import { FC } from 'react';
import { FaArrowRight, FaDollarSign, FaEnvelope, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

interface WorkerCardProps {
    recruiting: IRecruiting;
}

const WorkerCard: FC<WorkerCardProps> = ({ recruiting }) => {
    const dispatch = useDispatch();

    const handleClickWorker = () => {
        dispatch(updateRecruiting(recruiting));
    };

    const handleClickViewWorker = (e: any) => {
        e.stopPropagation();
        dispatch(updateSelectedWorker(recruiting.worker || null));
    };

    return (
        <div
            onClick={handleClickWorker}
            className="cursor-pointer bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300"
        >
            <div className="flex justify-between items-start">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium mr-3">
                        JD
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-800">{recruiting?.worker?.firstName}</h4>
                        {/* <p className="text-xs text-gray-500">
                            5 years in front-end
                        </p> */}
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">New</span>
                </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
                {/* <div>
                    <p className="text-sm text-gray-600">
                        <FaDollarSign className="mr-1 text-gray-500 inline" />
                        $120,000
                    </p>
                </div> */}
                <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                        <FaEnvelope />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                        <FaTimes />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                <span>Last message: 1h ago</span>
                <button onClick={handleClickViewWorker} className="text-blue-500 hover:underline">
                    View Resume
                </button>
            </div>
        </div>
    );
};

export default WorkerCard;
