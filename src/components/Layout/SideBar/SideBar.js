import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { hide } from '../../../features/counter/counterMenu';
import useClickOutSide from '../../hooks/useClickOutSide';
import Button from '../../Button/Button';

import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    const dispatch = useDispatch();
    const sideRef = useRef();

    const handleClose = () => {
        dispatch(hide());
    };

    useClickOutSide(sideRef, handleClose);

    return (
        <div className={cx('side-bar')} ref={sideRef}>
            <div className={cx('side-inner')}>
                <Button className={cx('side-ele')} onClick={() => handleClose()} to={'/'}>
                    <span className={cx('side-title')}>Discreption</span>
                </Button>
                <Button className={cx('side-ele')} onClick={() => handleClose()} to={'/'}>
                    <span className={cx('side-title')}>Discreption</span>
                </Button>
                <Button className={cx('side-ele')} onClick={() => handleClose()} to={'/'}>
                    <span className={cx('side-title')}>Discreption</span>
                </Button>
                <Button className={cx('side-ele')} onClick={() => handleClose()} to={'/'}>
                    <span className={cx('side-title')}>Discreption</span>
                </Button>
                <Button className={cx('side-ele')} onClick={() => handleClose()} to={'/'}>
                    <span className={cx('side-title')}>Discreption</span>
                </Button>
                <Button className={cx('side-ele')} onClick={() => handleClose()} to={'/'}>
                    <span className={cx('side-title')}>Discreption</span>
                </Button>
            </div>
        </div>
    );
}

export default SideBar;
