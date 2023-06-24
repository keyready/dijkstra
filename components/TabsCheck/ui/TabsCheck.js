'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const routes = ['/', 'bfs', 'dijkstra', 'ford-fulkerson', 'floyd'];

export const TabsCheck = () => {
    const savedTab = Cookies.get('saved-tab') || 0;
    const [currentTab, setCurrentTab] = useState(Number(savedTab));
    const router = useRouter();

    useEffect(() => {
        function checkKeyboardPress(e) {
            if (e.code === 'ArrowRight') {
                if (currentTab >= routes.length - 1) return;
                setCurrentTab((prevState) => prevState + 1);
            }

            if (e.code === 'ArrowLeft') {
                if (currentTab <= 0) return;
                setCurrentTab((prevState) => prevState - 1);
            }
        }

        document.addEventListener('keydown', checkKeyboardPress);
        router.push(`/${routes[currentTab]}`);
        Cookies.set('saved-tab', currentTab);

        return () => document.removeEventListener('keydown', checkKeyboardPress);
    }, [currentTab, router]);

    return null;
};
