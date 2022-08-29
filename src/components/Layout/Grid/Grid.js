import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import useViewPort from '../../hooks/useViewPort';
import Item from '../Item/Item';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

function Grid({ data, numberi }) {
    const grid = useRef();
    var width = useViewPort(grid);
    const number = Math.floor(width / 230);

    var slice = 0;

    console.log(width);

    if (numberi) slice = numberi;
    else slice = number;

    return (
        <div className={cx('grid')}>
            <div className={cx('grid-inner')} ref={grid}>
                <div className={cx('grid-items')}>
                    {data.slice(0, slice).map((e, index) => (
                        <Item
                            data={e}
                            key={index}
                            style={{ width: `${width / number}px` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Grid;
