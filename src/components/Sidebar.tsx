'use client';
import AuthServices from '@/services/authServices';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { FaBriefcase, FaCalendarAlt, FaCog, FaEnvelope, FaHome, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const menus = useMemo(
        () => [
            {
                title: 'Home',
                path: '/',
                icon: <FaHome className="w-5 text-center" />,
                active: pathname === '/',
            },
            {
                title: 'Messages',
                path: '/message',
                icon: <FaEnvelope className="w-5 text-center" />,
                active: pathname === '/message',
            },
            {
                title: 'Interview Schedule',
                path: '/interview',
                icon: <FaCalendarAlt className="w-5 text-center" />,
                active: pathname === '/interview',
            },
            {
                title: 'Account Settings',
                path: '/account',
                icon: <FaCog className="w-5 text-center" />,
                active: pathname === '/account',
            },
        ],
        [pathname]
    );

    const handleLogout = async () => {
        await AuthServices.logout();
        toast.success('Logout successfully');
        router.push('/auth/login');
    };

    return (
        <div className="w-64 bg-white shadow-sm flex-shrink-0 hidden md:block transition-all duration-300 fixed top-0 left-0 bottom-0 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <Link href={'/'}>
                    <h1 className="text-xl font-bold flex items-center gap-2 text-blue-600">
                        <FaBriefcase className="text-blue-600" />
                        <span>RecruitPro</span>
                    </h1>
                </Link>
            </div>
            <nav className="p-4 space-y-1">
                {menus.map((menu) => (
                    <Link
                        key={menu.path}
                        href={menu.path}
                        className={cn(
                            'nav-item flex items-center gap-3 p-3 rounded-lg border-l-4 border-transparent text-gray-600',
                            {
                                'text-blue-600 border-blue-600 bg-blue-50': menu.active,
                            }
                        )}
                    >
                        {menu.icon}
                        <span>{menu.title}</span>
                    </Link>
                ))}
                <div
                    onClick={handleLogout}
                    className={cn(
                        'nav-item flex items-center gap-3 p-3 rounded-lg border-l-4 border-transparent text-gray-600 cursor-pointer',
                        {}
                    )}
                >
                    <FaSignOutAlt className="w-5 text-center" />
                    <span>Logout</span>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
