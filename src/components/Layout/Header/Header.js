import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { LikeIcon, UserIcon } from '../../Icon/Icon';
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('warpper')}>
                <div className={cx('left')}>
                    <div className={cx('menu-icon')}>
                        <Menu />
                    </div>
                    <div className={cx('logo')}>
                        <Link to={'/'}>
                            <h1 className={cx('logo-img')}>MyShoppp</h1>
                        </Link>
                    </div>
                </div>
                <div className={cx('center')}>
                    <Search />
                </div>
                <div className={cx('right')}>
                    <div className={cx('like-icon')}>
                        <LikeIcon />
                    </div>
                    <div className={cx('cart-outer')}>
                        <Cart />
                    </div>
                    <div className={cx('user-icon')}>
                        <UserIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
