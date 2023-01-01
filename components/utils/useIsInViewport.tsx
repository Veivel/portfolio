import { useState, useMemo, useEffect, MutableRefObject } from "react";

export function useIsInViewport(ref: MutableRefObject<any>): boolean {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
        () => {
            let obs = null;

            if (typeof window === "undefined") return;

            obs = new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            );

            return obs;
        }, []
    );
  
    useEffect(() => {
        if (typeof window !== "undefined") {
            observer?.observe(ref.current);
      
            return () => {
                observer?.disconnect();
            };
        }
    }, [ref, observer]);
  
    return isIntersecting;
}