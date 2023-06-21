'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { MobileView, BrowserView } from 'react-device-detect';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Лабораторные работы',
    description: 'Выполнено Корчаком Р.Д.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MobileView className="notAllowed">
                    <h2 style={{ width: '100%', textAlign: 'center' }}>
                        Этот проект недоступен с мобильных устройств
                    </h2>
                    <p style={{ width: '100%', textAlign: 'center' }}>Перезайдите с компьютера</p>
                </MobileView>
                <BrowserView>
                    <Header />
                    <div className="page">{children}</div>
                </BrowserView>
            </body>
        </html>
    );
}
