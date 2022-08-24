import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import useClickOutSide from '../../../hooks/useClickOutSide';
import Popper from '../Popper/Popper';

import { CartIcon } from '../../Icon/Icon';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const [show, setShow] = useState(false);

    const cartRef = useRef();

    const handleClose = () => {
        setShow(false);
    };

    const handleClickShow = () => {
        setShow(true);
    };

    useClickOutSide(cartRef, handleClose);

    return (
        <div className={cx('cart')} ref={cartRef} onClick={handleClickShow}>
            <div className={cx('cart-inner')}>
                <div className={cx('cart-icon')}>
                    <CartIcon />
                </div>
                <div className={cx('cart-number')}>
                    <span className={cx('number')} tabIndex="-1">
                        4
                    </span>
                </div>
            </div>
            {show && (
                <div className={cx('popper-outer')}>
                    <Popper />
                </div>
            )}
        </div>
    );
}

export default Cart;
