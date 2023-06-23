'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const routes = ['/', 'bfs', 'dfs', 'dijkstra', 'ford-fulkerson', 'floyd'];

export const TabsCheck = () => {
    const [currentTab, setCurrentTab] = useState(0);
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

        return () => document.removeEventListener('keydown', checkKeyboardPress);
    }, [currentTab, router]);

    return null;
};
