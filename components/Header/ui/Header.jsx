'use client';

import Link from 'next/link';
import { useState } from 'react';
import classes from './header.module.scss';

export function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <div className={classes.header}>
            <Link href="/">Главная</Link>
            <div className={classes.hoverLink}>
                <p onMouseEnter={() => setIsMenuVisible(true)}>Обход графа</p>
                {isMenuVisible && (
                    <div onMouseLeave={() => setIsMenuVisible(false)} className={classes.menu}>
                        <Link href="/bfs">В ширину</Link>
                        <Link href="/dfs">В глубину</Link>
                    </div>
                )}
            </div>
            <Link href="/dijkstra">Дейкстра</Link>
            <Link href="/ford-fulkerson">Форд-Фалкерсон</Link>
            <Link href="/floyd">Флойд</Link>
        </div>
    );
}
