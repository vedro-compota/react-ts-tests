import { useStyles } from "./styles";
import { useState, useCallback } from "react";

export type PropsType = any;

export function ResizingElement(props: PropsType) {
  const [leftWidth, setLeftWidth] = useState(200);

  const classes = useStyles({ leftWidth: leftWidth });

  const handleClick = useCallback(() => {
    setLeftWidth((prev) => {
      if (prev === 200) {
        return 400;
      } else {
        return 200;
      }
    });
  }, []);

  return (
    <div className={classes.left}>
      left
      <div>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={handleClick}>
          {"Change"}
        </a>
      </div>
    </div>
  );
}
