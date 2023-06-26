'use client';

import Link from 'next/link';
import classes from './page.module.scss';

export default function Home() {
    return (
        <main className={classes.main}>
            <div className={classes.tipWrapper}>
                <div className={classes.tip}>
                    <h2 className={classes.tipTitle}>Программные комплексы</h2>
                    <p className={classes.tipDescription}>
                        Реализованы курсантом 611/11 учебной группы Корчаком Р.Д.
                    </p>
                </div>
                {/* <div className={classes.tip}> */}
                {/*    <h2 className={classes.tipTitle}>Полезный совет</h2> */}
                {/*    <p className={classes.tipDescription}> */}
                {/*        Для навигации по приложению используйте стрелочки влево и в право на */}
                {/*        клавиатуре */}
                {/*    </p> */}
                {/*    <div className={classes.images}> */}
                {/*        <Image className={classes.image} src={LeftArrow} alt="Стрелочка влево" /> */}
                {/*        <Image className={classes.image} src={RightArrow} alt="Стрелочка вправо" /> */}
                {/*    </div> */}
                {/* </div> */}
            </div>

            <h2 className={classes.title}>Содержание</h2>
            <h3>В работе реализованы следующие алгоритмы:</h3>
            <div className={classes.links}>
                <Link className={classes.referenceLinks} href="/bfs">
                    Обход графа в ширину
                </Link>
                <Link className={classes.referenceLinks} href="/bfs">
                    Обход графа в глубину
                </Link>
                <Link className={classes.referenceLinks} href="/dijkstra">
                    Алгоритм Дейкстры
                </Link>
                <Link className={classes.referenceLinks} href="/ford-fulkerson">
                    Алгоритм Форда-Фалкерсона
                </Link>
                <Link className={classes.referenceLinks} href="/floyd">
                    Алгоритм Флойда
                </Link>
            </div>

            <h2 className={classes.title}>Технологии</h2>
            <h3>Для выполнения работы были использованы следующие технологии:</h3>
            <ul className={classes.technologiesList}>
                <li>
                    <span>{'Для визуального отображения создан веб-интерфейс на фреймфорке '}</span>
                    <a
                        className={classes.referenceLinks}
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noreferrer"
                    >
                        NextJs
                    </a>
                    <span>{' и '}</span>
                    <a
                        className={classes.referenceLinks}
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ReactJs
                    </a>
                </li>
                <li>
                    <span>{'Для вычилений был написан сервер на '}</span>
                    <a
                        className={classes.referenceLinks}
                        href="https://nodejs.org"
                        target="_blank"
                        rel="noreferrer"
                    >
                        NodeJs
                    </a>
                    <span>{' с использованием фреймворка '}</span>
                    <a
                        className={classes.referenceLinks}
                        href="https://expressjs.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ExpressJs
                    </a>
                </li>
                <li>
                    <span>{'Для хостинга был использован сервис '}</span>
                    <a
                        className={classes.referenceLinks}
                        href="https://vercel.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Vercel.com
                    </a>
                    <span>{' и '}</span>
                    <a
                        className={classes.referenceLinks}
                        href="https://netlify.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Netlify.app
                    </a>
                </li>
            </ul>
        </main>
    );
}
