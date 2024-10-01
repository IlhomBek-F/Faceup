import { useEffect, useState } from "react";

function useScroll() {
    const [isVisible, setVisible] = useState(false);
    const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const handleScroll = () => setVisible(window.scrollY > 1000);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return { isVisible, goTop }
}

export { useScroll }

