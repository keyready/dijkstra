'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.tipWrapper}>
                <div className={styles.tip}>
                    <h2>Работа выполнена</h2>
                    <p>Выполнена курсантом 611/11 учебной группы</p>
                    <p>Корчаком Р.Д.</p>
                </div>
                <div className={styles.tip}>
                    <h2>Полезный совет</h2>
                    <p>
                        Для навигации по приложению используйте стрелочки влево и в право на
                        клавиатуре
                    </p>
                </div>
            </div>

            <h2 className={styles.title}>Содержание</h2>
            <h3>В работе реализованы следующие алгоритмы:</h3>
            <div className={styles.links}>
                <Link href="/bfs">Обход графа в ширину</Link>
                <Link href="/dfs">Обход графа в глубину</Link>
                <Link href="/dijkstra">Алгоритм Дейкстры</Link>
                <Link href="/dantzig">Алгоритм Данцига</Link>
                <Link href="/ford-fulkerson">Алгоритм Форда-Фалкерсона</Link>
                <Link href="/floyd">Алгоритм Флойда</Link>
            </div>

            <h2 className={styles.title}>Технологии</h2>
            <h3>Для выполнения работы были использованы следующие технологии:</h3>
            <ul className={styles.technologiesList}>
                <li>
                    {'Для визуального отображения создан веб-интерфейс на фреймфорке '}
                    <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                        NextJs
                    </a>
                </li>
                <li>
                    {'Для вычилений был написан сервер на '}
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                        NodeJs
                    </a>
                    {' с использованием фреймворка '}
                    <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                        ExpressJs
                    </a>
                </li>
                <li>
                    {'Для хостинга был использован сервис '}
                    <a href="https://vercel.com" target="_blank" rel="noreferrer">
                        Vercel.com
                    </a>
                </li>
            </ul>
        </main>
    );
}
