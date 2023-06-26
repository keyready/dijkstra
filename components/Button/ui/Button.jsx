import classes from './Button.module.scss';
import { classNames } from '@/lib/classNames';

export function Button(props) {
    // eslint-disable-next-line object-curly-newline
    const { children, className, type = 'primary', ...otherProps } = props;

    return (
        <button
            className={classNames(
                classes.button,
                {
                    [classes.clear]: type === 'clear',
                },
                [className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
}
