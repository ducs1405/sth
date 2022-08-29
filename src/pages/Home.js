import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from '../components/Layout/Slide/Slide';
import Button from '../components/Button/Button';
import Grid from '../components/Layout/Grid/Grid';

const cx = classNames.bind(styles);

const products = [
    {
        name: 'bublrite',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/280/871/8cf3ff616a13a89f89097e7ac95bd150.image.257x300__62863.1513823173.jpg?c=2',
        price: '2000$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/278/887/B001FWY2E2.01._SS1500_SCRMZZZZZZ___44750_zoom__58305.1513823613.jpg?c=2',
        price: '300$',
    },
    {
        name: 'bruck lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/276/902/B001JAGH5W.01._SS1500_SCRMZZZZZZ___81291_zoom__78904.1513823691.jpg?c=2',
        price: '510$',
    },
    {
        name: 'fortuny lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/275/909/B001N43PKO.01._SS1500_SCRMZZZZZZ___75217_zoom__22251.1513823738.jpg?c=2',
        price: '380$',
    },
    {
        name: 'classy caps',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/274/918/adidas-running-shoes__61339.1513823769.jpg?c=2',
        price: '280$',
    },
    {
        name: 'hunza',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/273/929/B001RB1FOG.01._SS1500_SCRMZZZZZZ___98891_zoom__86066.1513823807.jpg?c=2',
        price: '390$',
    },
    {
        name: 'elk lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/269/956/B0021C6F6S.01._SS1500_SCRMZZZZZZ___51260_zoom__20379.1513823929.jpg?c=2',
        price: '140$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
    {
        name: 'dimond lighting',
        images: 'https://cdn11.bigcommerce.com/s-c1ckj7z8/images/stencil/210x280/products/279/879/adidas_ambition_pb_Black_Yellow__17486.1513823426.jpg?c=2',
        price: '112$',
    },
];

function Home() {
    return (
        <div className={cx('home')}>
            <Slide />
            <div className={cx('shop')}>
                <div className={cx('shop-title')}>
                    <h2>SHOP BY</h2>
                </div>
                <div className={cx('shop-items')}>
                    <Button to={'/'} className={cx('shop-btn')}>
                        <img
                            className={cx('shop-img')}
                            src="https://physiqapparel-demo.mybigcommerce.com/product_images/uploaded_images/shop-by-1.jpg"
                            alt=""
                        />
                    </Button>
                    <Button to={'/'} className={cx('shop-btn')}>
                        <img
                            className={cx('shop-img')}
                            src="https://physiqapparel-demo.mybigcommerce.com/product_images/uploaded_images/shop-by-2.jpg"
                            alt=""
                        />
                    </Button>
                    <Button to={'/'} className={cx('shop-btn')}>
                        <img
                            className={cx('shop-img')}
                            src="https://physiqapparel-demo.mybigcommerce.com/product_images/uploaded_images/shop-by-3.jpg"
                            alt=""
                        />
                    </Button>
                </div>
            </div>
            <Grid data={products} />
        </div>
    );
}

export default Home;
