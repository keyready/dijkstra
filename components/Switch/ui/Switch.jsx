import { Fragment, memo } from 'react';
import { Switch as HSwitch } from '@headlessui/react';
import { classNames } from '@/lib/classNames';
import classes from './Switch.module.scss';

export const Switch = memo((props) => {
    const { enabled, setEnabled } = props;

    return (
        <HSwitch checked={enabled} onChange={setEnabled} as={Fragment}>
            {({ checked }) => (
                <button
                    className={classNames(classes.button, {
                        [classes.checkedButton]: checked,
                    })}
                >
                    <span
                        className={classNames(classes.check, {
                            [classes.checked]: checked,
                        })}
                    />
                </button>
            )}
        </HSwitch>
    );
});
