import { useState, useEffect } from "react"

const options = {
    root: null,
    rootMargin: "0px",
    threshold:1.0
}

export function useObserver (element) {
    const [ isVisible, setIsVisible ] = useState(false)
    
    const callbackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        const containerRefCurrent = element.current
        if (containerRefCurrent) observer.observe(containerRefCurrent)
    
        return () => {
            if (containerRefCurrent) observer.unobserve(containerRefCurrent)
        }
    }, [element])

    return [ isVisible ]
}
