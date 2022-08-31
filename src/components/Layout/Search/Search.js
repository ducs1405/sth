import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import useDebounce from '../../hooks/useDebounce';
import useClickOutSide from '../../hooks/useClickOutSide';

import { SearchIcon } from '../../Icon/Icon';
import Popper from '../Popper/Popper';
import styles from './Search.module.scss';
import ProductItem from '../Popper/MenuItem/ProductItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [show, setShow] = useState(false);
    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {}, [debounced]);

    const handleClose = () => {
        setShow(false);
    };

    const inputRef = useRef();

    useClickOutSide(inputRef, handleClose);

    const handleFocus = () => {
        setShow(true);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={cx('search')} ref={inputRef}>
            <div className={cx('search-inner')}>
                <input
                    placeholder="loading"
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                <button className={cx('search-btn')}>
                    <div className={cx('search-icon')}>
                        <SearchIcon />
                    </div>
                </button>
            </div>
            {show && (
                <div className={cx('popper-outer')}>
                    <Popper>
                        <ProductItem />
                    </Popper>
                </div>
            )}
        </div>
    );
}

export default Search;
