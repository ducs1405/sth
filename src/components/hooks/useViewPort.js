import { useState, useEffect } from 'react';

const useViewPort = (ref) => {
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width);

    useEffect(() => {
        const handleWindowResize = () =>
            setTimeout(() => setWidth(ref.current.offsetWidth), 700);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return width;
};

export default useViewPort;
