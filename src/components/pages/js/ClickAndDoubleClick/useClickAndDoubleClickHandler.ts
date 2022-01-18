import { useMemo, useRef } from "react";

export type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;

export function useClickAndDoubleClickHandler(onSingleClick: ClickHandler, onDoubleClick: ClickHandler, latency = 1500) {
  let clickCount = useRef(0);

  const clickHandler = useMemo(() => {
    return (event: React.MouseEvent<HTMLElement>) => {
      clickCount.current += 1;
      setTimeout(function () {
        if (clickCount.current === 1) {
          onSingleClick(event);
        } else if (clickCount.current === 2) {
          onDoubleClick(event);
        } 
        clickCount.current = 0;
      }, latency);
    }
  }, [onSingleClick, onDoubleClick, latency]);

  return clickHandler;
}