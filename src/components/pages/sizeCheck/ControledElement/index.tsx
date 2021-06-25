import { useStyles } from "./styles";
import { useState, useEffect, useRef, memo } from "react";

export type PropsType = any;


// custom hook for ResizeObserver
const useElementWidth = () => {

    const ref: any = useRef();
    const [width, setWidth] = useState<null | number>(null);

    const observer = useRef(
      new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect;
        setWidth(width);
      })
    );
  
    useEffect(() => {
      observer.current.observe(ref.current);
    }, 
    [ref, observer]);

    return [ref, width];
}

export function ControledElement(props: PropsType) {

  const classes = useStyles();
  const [ref, width] =  useElementWidth();
  console.log('current width: ', width);

  return (
    <div ref={ref} className={classes.right}>
      Right
    </div>
  );
}

export const MemoizedControledElement = memo(ControledElement);
