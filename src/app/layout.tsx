'use client';
import { store } from '@/redux/store';
import localFont from 'next/font/local';
import { Provider } from 'react-redux';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/hoc/AuthProvider';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Provider store={store}>
                    <AuthProvider>
                        {children}
                        <Toaster />
                    </AuthProvider>
                </Provider>
            </body>
        </html>
    );
}
