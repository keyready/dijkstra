'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import classes from './page.module.scss';
import RightArrow from '../public/images/right_arrow.png';
import LeftArrow from '../public/images/left_arrow.png';

export default function Home() {
    return (
        <main className={classes.main}>
            <div className={classes.tipWrapper}>
                <div className={classes.tip}>
                    <h2 className={classes.tipTitle}>Работа выполнена</h2>
                    <p className={classes.tipDescription}>
                        Выполнена курсантом 611/11 учебной группы Корчаком Р.Д.
                    </p>
                </div>
                <div className={classes.tip}>
                    <h2 className={classes.tipTitle}>Полезный совет</h2>
                    <p className={classes.tipDescription}>
                        Для навигации по приложению используйте стрелочки влево и в право на
                        клавиатуре
                    </p>
                    <div className={classes.images}>
                        <Image className={classes.image} src={LeftArrow} alt="Стрелочка влево" />
                        <Image className={classes.image} src={RightArrow} alt="Стрелочка вправо" />
                    </div>
                </div>
            </div>

            <h2 className={classes.title}>Содержание</h2>
            <h3>В работе реализованы следующие алгоритмы:</h3>
            <div className={classes.links}>
                <Link href="/bfs">Обход графа в ширину</Link>
                <Link href="/dfs">Обход графа в глубину</Link>
                <Link href="/dijkstra">Алгоритм Дейкстры</Link>
                <Link href="/dantzig">Алгоритм Данцига</Link>
                <Link href="/ford-fulkerson">Алгоритм Форда-Фалкерсона</Link>
                <Link href="/floyd">Алгоритм Флойда</Link>
            </div>

            <h2 className={classes.title}>Технологии</h2>
            <h3>Для выполнения работы были использованы следующие технологии:</h3>
            <ul className={classes.technologiesList}>
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
