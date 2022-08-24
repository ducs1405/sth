import { MenuIcon } from '../../Icon/Icon';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { show } from '../../../features/counter/counterMenu';
import SideBar from '../SideBar/SideBar';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

function Menu() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const showMenu = () => {
        dispatch(show());
    };

    return (
        <div className={cx('Menu')}>
            <Button onClick={showMenu}>
                <MenuIcon />
            </Button>
            {count && <SideBar />}
        </div>
    );
}

export default Menu;
