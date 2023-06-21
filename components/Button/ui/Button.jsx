import classes from './Button.module.scss';
import { classNames } from '@/lib/classNames';

export function Button(props) {
    const { children, className, ...otherProps } = props;

    return (
        <button className={classNames(classes.button, {}, [className])} {...otherProps}>
            {children}
        </button>
    );
}
