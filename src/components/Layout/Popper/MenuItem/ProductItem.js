import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '../../../Button/Button';

const cx = classNames.bind(styles);

function ProductItem() {
    return (
        <Button className={cx('product-item')} to={'/'}>
            <div className={cx('product-image')}>
                <img
                    src="https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2"
                    alt="imager"
                    className={cx('image')}
                />
            </div>
            <div className={cx('product-title')}>
                <div className={cx('product-name')}>
                    <span className={cx('name')}>Description</span>
                </div>
                <div className={cx('product-price')}>
                    <span className={cx('price')}>599 $</span>
                </div>
            </div>
        </Button>
    );
}

export default ProductItem;
