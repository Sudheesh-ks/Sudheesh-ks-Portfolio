import { type RefObject, useEffect } from "react";

export function useCursor(
  cursorRef: RefObject<HTMLDivElement | null>,
  ringRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    document.body.style.cursor = "none";

    let mx = 0,
      my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }

      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = mx + "px";
          ringRef.current.style.top = my + "px";
        }
      }, 60);
    };

    document.addEventListener("mousemove", onMove);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
    };
  }, [cursorRef, ringRef]);
}