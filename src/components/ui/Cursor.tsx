import type { CursorProps } from "../../types/cursor";

export default function Cursor({ cursorRef, ringRef }: CursorProps) {
  return (
    <>
      <div className="sk-cursor" ref={cursorRef} />
      <div className="sk-cursor-ring" ref={ringRef} />
      <div className="sk-noise" />
    </>
  );
}