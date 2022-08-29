import { useState, useEffect } from 'react';

const useViewPort = (ref) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () =>
            setTimeout(() => setWidth(ref.current.parentElement.offsetWidth), 300);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return width;
};

export default useViewPort;
