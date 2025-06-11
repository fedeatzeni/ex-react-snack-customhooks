import { useState, useEffect } from "react";

export default function useCustomPointer(string) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", updatePosition);

        // per quando viene smontato
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return <div style={{ position: "fixed", top: mousePosition.y, left: mousePosition.x, transform: "translate(-50%. -50%)", cursor: "none" }}>{string}</div>;
}