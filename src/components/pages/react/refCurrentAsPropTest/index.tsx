import { useRef, useState } from "react";
import { SubComponent } from "./SubComponent";

export type PropsType = any;

export type Settings = {
  numbers: number[];
  value: number
};

export function RefCurrentAsPropTest(props: PropsType) {

  const refState = useRef<Settings>({
    numbers: [],
    value: 1,
  });
  console.log(' -------------RefCurrentAsPropTest refValue', refState.current.numbers );
  const [count, setCount] = useState(0);


  console.log('render');

  console.log();


  


  return (
    <div>
      <SubComponent  refValue={refState}  count={count} setCount={setCount}/>
    </div>
  );
}

