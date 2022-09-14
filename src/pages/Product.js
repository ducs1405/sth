import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../components/Button/Button';
import Grid from '../components/Layout/Grid/Grid';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    console.log('1');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleColor = (e) => {
        if (color === e) setColor('');
        else setColor(e);
    };

    const handleSize = (e) => {
        if (size === e) setSize('');
        else setSize(e);
    };

    return (
        <div className={cx('product')}>
            <div className={cx('information')}>
                <div className={cx('images')}>
                    <img
                        alt=""
                        className={cx('image-show')}
                        src="https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/1280x1280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2"
                    />
                    <div className={cx('image-slide')}>
                        <Button className={cx('images-chill')}>
                            <img
                                className={cx('imgs')}
                                alt=""
                                src="https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/1280x1280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2"
                            />
                        </Button>
                    </div>
                </div>
                <div className={cx('details')}>
                    <div className={cx('item-name')}>
                        [Sample] French Connection, straw bag
                    </div>
                    <div className={cx('item-brand', 'infor')}>
                        <span className={cx('title', 'brand')}>Brand:</span>
                        <span className={cx('name')}>DIMOND LIGHTING</span>
                    </div>
                    <div className={cx('item-color', 'infor')}>
                        <span className={cx('title', 'color')}>Color:</span>
                        <Button
                            className={cx(
                                'name',
                                'color-btn',
                                color === 'red' && 'active',
                            )}
                            onClick={() => handleColor('red')}
                        >
                            Red
                        </Button>
                    </div>
                    <div className={cx('item-size', 'infor')}>
                        <span className={cx('title', 'size')}>Size:</span>
                        <Button
                            className={cx('name', 'size-btn', size === '37' && 'active')}
                            onClick={() => handleSize('37')}
                        >
                            37
                        </Button>
                    </div>
                    <div className={cx('quantity', 'infor')}>
                        <span className={cx('title', 'size')}>quantity:</span>
                        <div className={cx('quantity-from')}>
                            <Button
                                className={cx('quantity-btn')}
                                onClick={() => setQuantity(quantity - 1)}
                            >
                                -
                            </Button>
                            <input
                                className={cx('quantity-input')}
                                value={quantity}
                                onChange={(e) => e.target.value}
                            />
                            <Button
                                className={cx('quantity-btn')}
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                    <div className={cx('item-price')}>5000$</div>
                    <div className={cx('add-cart')}>
                        <Button className={cx('add-btn')}>Add to cart</Button>
                    </div>
                </div>
            </div>
            <div className={cx('description')}>
                <span className={cx('description-title')}>Description</span>
                <span className={cx('description-span')}>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos
                    sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at,
                    mollis ut risus. Sedcus faucibus cosmo sullamcorper mattis fusce
                    molestie elit a lorem tempus scelerisque blandit est cursus. Quisque
                    volutpat orci ut metus malesuada in interdum lectus scelerisque.
                    Praesent deu modio des nisios dullamcorper ultricies. Cum sociis
                    natoque penatibus et magnis dis parturient montes nascetur ridiculus
                    mus. Sample Unordered List Loremous tempor ullamcorper iaculis.
                    Pellentesque vitae neque mollis urna mattis laoreet. Divamus sit amet
                    purus justo. Proin molestie egestas orci ac suscipit risus posuere.
                    Praesent at justo congue leo adipiscing porta nec non sapien. Donec et
                    libero nunc quis facilisis odio. Integer et est tellus non bibendum
                    est. Namcos tempus turpis at metus scelerisque placerat nulla eu
                    sollicitudin felis. Pellentesque diam dolor elementum et lobortis at
                    mollis ut risus. Sed faucibus ullamcorper mattis. Fusce molestie elit
                    a loremos tempus scelerisque blandit tortor cursus. Quisque dolutpat
                    orci ut metus malesuada in interdum lectus scelerisque. Praesent eu
                    odio ut nisi ullamcorper ultricies. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Sample Ordered
                    List Loremous tempor ullamcorper iaculis. Pellentesque vitae neque
                    mollis urna mattis laoreet. Divamus sit amet purus justo. Proin
                    molestie egestas orci ac suscipit risus posuere. Sample Paragraph Text
                    Praesent at justo congue leo adipiscing porta nec non sapien. Donec et
                    libero nunc quis facilisis odio. Integer et est tellus non bibendum
                    est. Namcos tempus turpis atos metus scelerisque placerat nulla eu
                    sollicitudin felis. Pellentesque diam dolor elementum et lobortis at
                    mollis ut risus. Praesent at justo congue leo adipiscing porta nec non
                    sapien. Donec et libero nunc quis facilisis odio. Integer et est
                    tellus non bibendum est. Namcos tempus turpis at metus scelerisque
                    placerat nulla eu sollicitudin felis. Pellentesque diam dolor
                    elementum et lobortis at mollis ut risus. Sed faucibus ullamcorper
                    mattis. Fusce molestie elit a loremos tempus scelerisque blandit
                    tortor cursus. Quisque dolutpat orci ut metus malesuada in interdum
                    lectus scelerisque. Praesent eu odio ut nisi ullamcorper ultricies.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Nam tempus turpis at metus scelerisque placerat nulla
                    deumantos sollicitudin felis. Pellentesque diam dolor, elementum et
                    lobortis at, mollis ut risus. Sedcus faucibus andos sullamcorper
                    mattis fusce molestie elit a lorem tempus scelerisque blandit est
                    cursus. Quisque volutpat orci ut metus malesuada in interdum lectus
                    scelerisque cosmo. Praesent deu odio des nisios dullamcorper
                    ultricies. Cum sociis natoque penatibus et magnis dis parturient
                    montes nascetur ridiculus mus.
                </span>
            </div>
            <div className={cx('review')}></div>
            <div className={cx('related')}>{/* <Grid /> */}</div>
        </div>
    );
}

export default Product;
