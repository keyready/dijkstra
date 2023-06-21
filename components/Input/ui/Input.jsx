import classes from './Input.module.scss';
import { classNames } from '@/lib/classNames';

export function Input(props) {
    const { className, ...otherProps } = props;

    return <input className={classNames(classes.input, {}, [className])} {...otherProps} />;
}
