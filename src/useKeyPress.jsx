import { useEffect, useState } from "react"

export default function useKeyPress(string) {
    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {
        //functions
        const keyDown = (event) => {
            // console.log(event);
            if (event.key === string) setIsPressed(true)
        };
        const keyUp = (event) => {
            if (event.key === string) setIsPressed(false)
            window.addEventListener("keyup", setIsPressed(false));
        };

        //listeners
        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);

        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        }
    }, [])

    return isPressed
}
