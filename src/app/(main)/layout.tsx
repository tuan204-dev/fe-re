import Sidebar from '@/components/Sidebar';
import AuthHoc from '@/hoc/AuthHoc';
import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthHoc>
            <main className="">
                <Sidebar />
                <div className="ml-64">{children}</div>
            </main>
        </AuthHoc>
    );
};

export default MainLayout;
