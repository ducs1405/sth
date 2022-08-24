import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '../../Button/Button';
import { FbIcon, GmailIcon, InsIcon } from '../../Icon/Icon';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-inner')}>
                <div className={cx('footer-column')}>
                    <div className={cx('footer-title')}>
                        <span className={cx('title')}>contacts</span>
                    </div>
                    <div className={cx('list-item')}>
                        <Button className={cx('item')} to={'/'}>
                            <div className={cx('item-icon')}>
                                <FbIcon />
                            </div>
                            <span className={cx('item-title')}>FaceBook</span>
                        </Button>
                        <Button className={cx('item')} to={'/'}>
                            <div className={cx('item-icon')}>
                                <InsIcon />
                            </div>
                            <span className={cx('item-title')}>Instagram</span>
                        </Button>
                        <Button className={cx('item')} to={'/'}>
                            <div className={cx('item-icon')}>
                                <GmailIcon />
                            </div>
                            <span className={cx('item-title')}>Gmail</span>
                        </Button>
                    </div>
                </div>
                <div className={cx('footer-column')}>
                    <div className={cx('footer-title')}>
                        <span className={cx('title')}>shop</span>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item')}>Woman</div>
                        <div className={cx('item')}>Men</div>
                        <div className={cx('item')}>Kid</div>
                    </div>
                </div>
                <div className={cx('footer-column')}>
                    <div className={cx('footer-title')}>
                        <span className={cx('title')}>brands</span>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item')}>Angry Birds</div>
                        <div className={cx('item')}>BeQuiet</div>
                        <div className={cx('item')}>Approx</div>
                        <div className={cx('item')}>Alexander Blackstone</div>
                        <div className={cx('item')}>A-Solar</div>
                        <div className={cx('item')}>Bioware - Adventure Time</div>
                        <div className={cx('item')}>Bioware - Einstein</div>
                        <div className={cx('item')}>Aerocool</div>
                    </div>
                </div>
                <div className={cx('footer-column')}>
                    <div className={cx('footer-title')}>
                        <span className={cx('title')}>customer service</span>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item')}></div>
                        <div className={cx('item')}></div>
                        <div className={cx('item')}></div>
                        <div className={cx('item')}></div>
                        <div className={cx('item')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
