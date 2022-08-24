import Button from '../../Button/Button';
import useClickOutSide from '../../hooks/useClickOutSide';
import { useRef } from 'react';

function Drawer() {
    const drawer = useRef();

    const handleClickDrawer = () => {
        useClickOutSide;
    };

    return (
        <div ref={drawer}>
            <Button onClick={handleClickDrawer}></Button>
        </div>
    );
}

export default Drawer;
