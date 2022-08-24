import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children }) {
    return (
        <div className={cx('popper')}>
            <div className={cx('popper-inner')}>
                <div className="popper-chill">{children}</div>
            </div>
        </div>
    );
}

export default Popper;
