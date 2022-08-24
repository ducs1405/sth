import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../../Button/Button';
import { NextIcon, PrevIcon } from '../../Icon/Icon';
import Item from '../Item/Item';
import styles from './SlideItem.module.scss';

const cx = classNames.bind(styles);

function SlideItem({ title, more, props }) {
    const length = props.length - 1;
    const [number, setNumber] = useState(length - 1);

    const handleClickNext = () => {
        setNumber(number === length ? 0 : number + 1);
    };

    const handleClickPrev = () => {
        setNumber(number === 0 ? length : number - 1);
    };

    return (
        <div className={cx('slide')}>
            <div className={cx('slide-title')}>
                <h2>{title}</h2>
                {more && (
                    <div className={cx('more')}>
                        <Button to={'/'} className={cx('more-btn')}>
                            More Item
                        </Button>
                    </div>
                )}
            </div>
            <div className={cx('slide-inner')}>
                <div className={cx('slide-items')}>
                    {props.slice(0, 5).map((e, index) => (
                        <Item children={e} key={index} />
                    ))}
                </div>
                <div className={cx('slide-prev')}>
                    <Button className={cx('slide-btn')} onClick={handleClickPrev}>
                        <PrevIcon />
                    </Button>
                </div>
                <div className={cx('slide-next')}>
                    <Button className={cx('slide-btn')} onClick={handleClickNext}>
                        <NextIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SlideItem;
