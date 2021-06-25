import { useStyles } from "./styles";
import { MemoizedControledElement } from "./ControledElement";
import { ResizingElement } from "./ResizingElement";

export type PropsType = any;

export function SizeCheckerDemo(props: PropsType) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <ResizingElement />
      {/* <ControledElement /> */}
      <MemoizedControledElement />
    </div>
    <div className={classes.two}> Test!</div>
    </>
  );
}
