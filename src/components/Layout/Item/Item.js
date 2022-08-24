import classNames from 'classnames/bind';
import { AddCart, LikedIcon, LikeIcon } from '../../Icon/Icon';
import styles from './Item.module.scss';
import Button from '../../Button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Item({ children }) {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(like ? false : true);
    };

    const handleAddCart = () => console.log('c');

    const handleGoItem = () => console.log('b');

    return (
        <div className={cx('item')}>
            <Button className={cx('item-btn')} onClick={handleGoItem} to={'/ad'}>
                <div className={cx('item-inner')}>
                    <div className={cx('item-infor')}>
                        <div
                            className={cx('item-bg')}
                            style={{ backgroundImage: `url(${children.images})` }}
                        ></div>
                        <div className={cx('item-discreption')}>
                            <span className={cx('item-name')}>{children.name}</span>
                            <span className={cx('item-brand')}>{children.name}</span>
                            <span className={cx('item-price')}>{children.price}</span>
                        </div>
                    </div>
                </div>
            </Button>
            <div className={cx('action')}>
                <div className={cx('like')}>
                    <Button className={cx('action-btn')} onClick={handleLike}>
                        <div className={cx('icon', 'like-icon')}>
                            {like ? <LikedIcon /> : <LikeIcon />}
                        </div>
                    </Button>
                </div>
                <div className={cx('add-cart')}>
                    <Button className={cx('action-btn')} onClick={handleAddCart}>
                        <div className={cx('icon')}>
                            <AddCart />
                        </div>
                    </Button>
                </div>
            </div>
            <div className={cx('status')}>
                <div className={cx('new')}>
                    <div className={cx('status-icon', 'new-icon')}>
                        <span className={cx('new-span')}>New</span>
                    </div>
                </div>
                <div className={cx('sale')}>
                    <div className={cx('status-icon', 'sale-icon')}>
                        <span className={cx('sale-span')}>Sale</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
