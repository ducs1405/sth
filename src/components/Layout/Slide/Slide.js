import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '../../Button/Button';
import { NextIcon, PrevIcon } from '../../Icon/Icon';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

const slides = [
    {
        title: '0',
        desceription: 'Sale 75% discount',
        img: 'https://cdn11.bigcommerce.com/s-fcn1lgnyqp/images/stencil/original/carousel/6/slide01.jpg?c=2',
    },
    {
        title: '1',
        desceription: 'Sale 75% discount',
        img: 'https://cdn11.bigcommerce.com/s-fcn1lgnyqp/images/stencil/original/carousel/8/slide03.jpg?c=2',
    },
    {
        title: '2',
        desceription: 'Sale 75% discount',
        img: '"https://cdn11.bigcommerce.com/s-fcn1lgnyqp/images/stencil/original/carousel/7/slide02.jpg?c=2"',
    },
];

function Slide() {
    const length = slides.length - 1;
    const [number, setNumber] = useState(length - 1);

    useEffect(() => {
        const delay = setTimeout(
            () => setNumber(number === length ? 0 : number + 1),
            5000,
        );
        return () => clearTimeout(delay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number]);

    const handleClickNext = () => {
        setNumber(number === length ? 0 : number + 1);
    };

    const handleClickPrev = () => {
        setNumber(number === 0 ? length : number - 1);
    };

    const handleClick = (index) => {
        setNumber(index);
    };

    return (
        <div className={cx('slide')}>
            <div className={cx('slide-inner')}>
                <div className={cx('slide-img')}>
                    {slides.map((e, index) => (
                        <div
                            key={index}
                            className={cx('slide-bg', number === index && 'visiable')}
                            style={{
                                backgroundImage: `url(${e.img})`,
                            }}
                        ></div>
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
                <div className={cx('slide-dots')}>
                    {slides.map((e, index) => (
                        <Button
                            key={index}
                            className={cx('dot', number === index && 'active')}
                            onClick={() => handleClick(index)}
                        ></Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slide;
