'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import classes from './page.module.scss';

export default function BFSLayout({ children }) {
    const route = useRouter();

    const handleButtonClick = useCallback(() => {
        route.push('/');
    }, [route]);

    return (
        <div>
            <Button className={classes.button} onClick={handleButtonClick}>
                На главную
            </Button>
            {children}
        </div>
    );
}
