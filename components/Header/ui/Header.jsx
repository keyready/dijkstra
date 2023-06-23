'use client';

import Link from 'next/link';
import { useState } from 'react';
import classes from './header.module.scss';

export function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <div className={classes.header}>
            <Link href="/">Главная</Link>
            <Link href="/bfs">Обход графа</Link>
            <Link href="/dijkstra">Дейкстра</Link>
            <Link href="/ford-fulkerson">Форд-Фалкерсон</Link>
            <Link href="/floyd">Флойд</Link>
        </div>
    );
}
