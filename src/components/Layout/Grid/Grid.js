import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import useViewPort from '../../hooks/useViewPort';
import Item from '../Item/Item';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

function Grid({ data }) {
    const grid = useRef();

    const width = useViewPort(grid);

    const number = Math.floor(width / 230);

    console.log(number);

    return (
        <div className={cx('grids')}>
            <div className={cx('grid-inner')} ref={grid}>
                <div className={cx('grid-items')}>
                    {data.slice(0, number).map((e, index) => (
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
