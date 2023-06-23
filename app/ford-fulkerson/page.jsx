'use client';

import { useCallback, useState } from 'react';

import classes from './page.module.scss';

import { classNames } from '@/lib/classNames';

export default function Page() {
    return (
        <div>
            <h1 className={classes.header}>Алгоритм Форда-Фалкерсона</h1>
            <p>пока в разработке</p>
        </div>
    );
}
