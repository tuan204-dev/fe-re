import { GenderLabel } from '@/constants/enum';
import { useAppSelector } from '@/redux/store';
import { formatPhoneNumber } from '@/utils/phone';
import { Drawer } from 'antd';
import React, { FC } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

interface WorkerProfileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const WorkerProfileDrawer: FC<WorkerProfileDrawerProps> = ({ isOpen, onClose }) => {
    const selectedWorker = useAppSelector((state) => state.recruiting.selectedWorker);

    return (
        <Drawer open={isOpen} onClose={onClose} width={800}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                        <img
                            src="https://avatar.iran.liara.run/public/35"
                            alt="Profile photo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-2xl font-medium text-gray-800">{`${selectedWorker?.firstName} ${selectedWorker?.lastName}`}</h1>
                    <div className="flex justify-center space-x-4 mt-2 text-gray-600 text-sm">
                        <span>{GenderLabel[selectedWorker?.gender ?? 0]}</span>
                        <span>{selectedWorker?.location}</span>
                    </div>
                    <div className="mt-2 text-gray-600">
                        <p>
                            {selectedWorker?.phone ? `${formatPhoneNumber(selectedWorker?.phone)} | ` : ''}
                            {selectedWorker?.email}
                        </p>
                    </div>
                </div>
                {/* Career Objective */}
                {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        🎯 Career Objective
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Seeking a position as a UX/UI Designer in a creative environment where I
                    can apply my design skills and user research experience. Passionate about
                    creating intuitive digital experiences that bridge business goals with
                    user needs. Looking for opportunities to collaborate with cross-functional
                    teams in an agile development process.
                </p>
            </div> */}
                <div className="border-b border-gray-200 my-8" />
                {/* Education */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                            🎓 Education
                        </h2>
                        <button className="ml-2 edit-icon">
                            <FaPencilAlt className="text-sm" />
                        </button>
                    </div>
                    <div className="space-y-6">
                        {/* <div className="pl-4">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-medium text-gray-800">Tokyo University</h3>
                            <span className="text-sm text-gray-500">2013/04 - 2017/03</span>
                        </div>
                        <p className="text-gray-600">
                            Faculty of Information and Communication
                        </p>
                        <p className="text-gray-700 mt-1">
                            Bachelor of Arts in Information Design
                        </p>
                    </div>
                    <div className="pl-4">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-medium text-gray-800">
                                Tokyo Metropolitan High School
                            </h3>
                            <span className="text-sm text-gray-500">2010/04 - 2013/03</span>
                        </div>
                        <p className="text-gray-600">Science and Technology Course</p>
                    </div> */}
                        {selectedWorker?.education && (
                            <h3 className="font-medium text-gray-800">{selectedWorker?.education}</h3>
                        )}
                    </div>
                </div>
                <div className="border-b border-gray-200 my-8" />
                {/* Work Experience */}
                {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        💼 Work Experience
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <div className="space-y-6">
                    <div className="pl-4">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-medium text-gray-800">Digital Solutions Inc.</h3>
                            <span className="text-sm text-gray-500">2019/04 - Present</span>
                        </div>
                        <p className="text-gray-600">UI/UX Designer</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                            <li>
                                Designed and prototyped user interfaces for web and mobile
                                applications
                            </li>
                            <li>
                                Conducted user research and usability testing to inform design
                                decisions
                            </li>
                            <li>
                                Collaborated with developers to ensure design implementation quality
                            </li>
                        </ul>
                        <div className="mt-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">
                                Figma
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">
                                User Research
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">
                                Prototyping
                            </span>
                        </div>
                    </div>
                    <div className="pl-4">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-medium text-gray-800">Creative Design Studio</h3>
                            <span className="text-sm text-gray-500">2017/04 - 2019/03</span>
                        </div>
                        <p className="text-gray-600">Junior Designer</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                            <li>Created visual designs for marketing materials and websites</li>
                            <li>
                                Assisted senior designers with client presentations and design
                                iterations
                            </li>
                            <li>Managed multiple projects with tight deadlines</li>
                        </ul>
                        <div className="mt-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">
                                Adobe Creative Suite
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">
                                HTML/CSS
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">
                                Project Management
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
                {/* <div className="border-b border-gray-200 my-8" /> */}
                {/* Certifications */}
                {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        📜 Certifications &amp; Qualifications
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <div className="space-y-4 pl-4">
                    <div>
                        <h3 className="font-medium text-gray-800">
                            UX Design Professional Certificate
                        </h3>
                        <p className="text-gray-600">Google / Coursera</p>
                        <p className="text-sm text-gray-500">Issued: 2021/06</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">
                            Adobe Certified Expert (Photoshop)
                        </h3>
                        <p className="text-gray-600">Adobe</p>
                        <p className="text-sm text-gray-500">Issued: 2020/03</p>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200 my-8" /> */}
                {/* Skills */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                            🛠️ Skills
                        </h2>
                        <button className="ml-2 edit-icon">
                            <FaPencilAlt className="text-sm" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                        {selectedWorker?.skills?.map((skill, index) => (
                            <div key={index} className="flex justify-between text-sm mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.level}/5</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="border-b border-gray-200 my-8" /> */}
                {/* Languages */}
                {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        🌐 Languages
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                    <div>
                        <h3 className="font-medium text-gray-800">Japanese</h3>
                        <p className="text-gray-600">Native</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">English</h3>
                        <p className="text-gray-600">Business-level (TOEIC 850)</p>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200 my-8" /> */}
                {/* Preferred Job Conditions */}
                {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        📌 Preferred Job Conditions
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                    <div>
                        <h3 className="font-medium text-gray-800">Desired Start Date</h3>
                        <p className="text-gray-600">2023/10 or negotiable</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Desired Job Title</h3>
                        <p className="text-gray-600">UX/UI Designer</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Preferred Location</h3>
                        <p className="text-gray-600">Tokyo (Remote possible)</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Work Format</h3>
                        <p className="text-gray-600">Full-time or Hybrid</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Desired Salary</h3>
                        <p className="text-gray-600">¥5,000,000 - ¥6,500,000/year</p>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200 my-8" /> */}
                {/* Additional Sections */}
                {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        💬 Additional Information
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <div className="space-y-6 pl-4">
                    <div>
                        <h3 className="font-medium text-gray-800">Volunteer Work</h3>
                        <p className="text-gray-700">
                            Design mentor at Tokyo Design Youth Program (2020 - Present)
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Portfolio</h3>
                        <a href="#" className="text-blue-600 hover:underline">
                            www.yukidesignportfolio.com
                        </a>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Social Media</h3>
                        <div className="flex space-x-4 mt-1">
                            <a href="#" className="text-blue-600 hover:underline">
                                <FaLinkedin className="mr-1" />
                                LinkedIn
                            </a>
                            <a href="#" className="text-blue-600 hover:underline">
                                <FaBehance className="mr-1" />
                                Behance
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Resume</h3>
                        <button className="mt-1 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition">
                            <FaDownload className="mr-2" />
                            Download Resume (PDF)
                        </button>
                    </div>
                </div>
            </div> */}
            </div>
        </Drawer>
    );
};

export default WorkerProfileDrawer;
