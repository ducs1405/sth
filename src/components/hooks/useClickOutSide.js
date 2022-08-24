import { useEffect } from 'react';

function useClickOutSide(ref, handler) {
    useEffect(() => {
        function handleClickOutside(event) {
            //If the menu is open and the clicked target within the menu
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, handler]);
}

export default useClickOutSide;
