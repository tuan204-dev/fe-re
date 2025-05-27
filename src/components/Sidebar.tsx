import Link from 'next/link';
import {
    FaBriefcase,
    FaCalendarAlt,
    FaCog,
    FaEnvelope,
    FaFileAlt,
    FaHome,
    FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-sm flex-shrink-0 hidden md:block transition-all duration-300 fixed top-0 left-0 bottom-0 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <FaBriefcase className="text-blue-600" />
                    <span>RecruitPro</span>
                </h1>
            </div>
            <nav className="p-4 space-y-1">
                <Link
                    href="/"
                    className="nav-item flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                    <FaHome className="w-5 text-center" />
                    <span>Home</span>
                </Link>
                <Link
                    href="/"
                    className="nav-item flex items-center gap-3 p-3 rounded-lg text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                >
                    <FaFileAlt className="w-5 text-center text-blue-600" />
                    <span>Posted Jobs</span>
                </Link>
                <Link
                    href="/"
                    className="nav-item flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                    <FaEnvelope className="w-5 text-center" />
                    <span>Messages</span>
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        3
                    </span>
                </Link>
                <Link
                    href="/"
                    className="nav-item flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                    <FaCalendarAlt className="w-5 text-center" />
                    <span>Interview Schedule</span>
                </Link>
                <Link
                    href="/"
                    className="nav-item flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                    <FaCog className="w-5 text-center" />
                    <span>Account Settings</span>
                </Link>
                <Link
                    href="/"
                    className="nav-item flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 mt-8"
                >
                    <FaSignOutAlt className="w-5 text-center" />
                    <span>Logout</span>
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar