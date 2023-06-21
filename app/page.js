'use client';

import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Лабораторная работа</h1>
            <p className={styles.description}>Выолнена курсантом 611/11 учебной группы</p>
            <p className={styles.description}>Корчаком Р.Д.</p>

            <h2 className={styles.title}>Содержание</h2>
            <h3>В работе реализованы следующие алгоритмы:</h3>
            <div className={styles.links}>
                <Link href="/bfs">Обход в ширину</Link>
                <Link href="/dijkstra">Дейкстра</Link>
                <Link href="/floyd">Флойд</Link>
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
