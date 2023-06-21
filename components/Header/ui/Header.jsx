import Link from 'next/link';
import classes from './header.module.scss';

export function Header() {
    return (
        <div className={classes.header}>
            <Link href="/">Главная</Link>
            <Link href="/bfs">Обход в ширину</Link>
            <Link href="/dijkstra">Дейкстра</Link>
            <Link href="/floyd">Флойд</Link>
        </div>
    );
}
