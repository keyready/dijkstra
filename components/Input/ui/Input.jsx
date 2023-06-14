import classes from './Input.module.scss'
import {classNames} from "@/lib/classNames";

export const Input = (props) => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <input
            className={classNames(classes.input, {}, [className])}
            {...otherProps}
        />
    )
}