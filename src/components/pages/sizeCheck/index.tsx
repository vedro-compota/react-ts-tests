import { useStyles } from "./styles";
import { ControledElement, MemoizedControledElement } from "./ControledElement";
import { ResizingElement } from "./ResizingElement";

export type PropsType = any;

export function SizeCheckerDemo(props: PropsType) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResizingElement />
      {/* <ControledElement /> */}
      <MemoizedControledElement />
    </div>
  );
}
