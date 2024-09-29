import { useRef, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
