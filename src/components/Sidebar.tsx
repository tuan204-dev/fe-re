'use client'
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
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
    const pathname = usePathname()

    const menus = useMemo(() => [
        {
            title: 'Home',
            path: '/',
            icon: <FaHome className="w-5 text-center" />,
            active: pathname === '/'
        },
        {
            title: 'Posted Jobs',
            path: '/job',
            icon: <FaFileAlt className="w-5 text-center" />,
            active: pathname.startsWith('/job')
        },
        {
            title: 'Messages',
            path: '/message',
            icon: <FaEnvelope className="w-5 text-center" />,
            active: pathname === '/message'
        },
        {
            title: 'Interview Schedule',
            path: '/interview',
            icon: <FaCalendarAlt className="w-5 text-center" />,
            active: pathname === '/interview'
        },
        {
            title: 'Account Settings',
            path: '/account',
            icon: <FaCog className="w-5 text-center" />,
            active: pathname === '/account'
        },
        {
            title: 'Logout',
            path: '/logout',
            icon: <FaSignOutAlt className="w-5 text-center" />,
            active: pathname === '/logout'
        },
    ], [pathname])

    return (
        <div className="w-64 bg-white shadow-sm flex-shrink-0 hidden md:block transition-all duration-300 fixed top-0 left-0 bottom-0 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-bold flex items-center gap-2 text-blue-600">
                    <FaBriefcase className="text-blue-600" />
                    <span>RecruitPro</span>
                </h1>
            </div>
            <nav className="p-4 space-y-1">
                {
                    menus.map((menu) => (
                        <Link
                            key={menu.path}
                            href={menu.path}
                            className={cn("nav-item flex items-center gap-3 p-3 rounded-lg border-l-4 border-transparent text-gray-600", {
                                'text-blue-600 border-blue-600 bg-blue-50': menu.active,
                            })}
                        >
                            {menu.icon}
                            <span>{menu.title}</span>
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar