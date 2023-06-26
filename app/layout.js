import './globals.css';
import { Inter } from 'next/font/google';
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
                {/* <TabsCheck /> */}
                <Header />
                <div className="page">{children}</div>
            </body>
        </html>
    );
}
