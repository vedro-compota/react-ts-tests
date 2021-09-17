import { useCallback} from "react";

import {Settings} from './index';

type SubComponentProps = {
  refValue: React.MutableRefObject<Settings>, // React.MutableRefObject<Settings>,
  count:  number,
  setCount: React.Dispatch<React.SetStateAction<number>>
};

export function SubComponent({refValue, count, setCount}: SubComponentProps) {

  let numbers = refValue.current.numbers;
  const current = refValue.current;

  const onClickAdd = useCallback(() => {
    setCount((v) => v + 1);  
    numbers.push(count);
    
    console.log('in hook onClickAdd numbers === refValue.current.numbers',   JSON.parse(JSON.stringify(numbers === refValue.current.numbers)));

  }, [setCount, count, numbers, refValue]);


  const onClickReset = useCallback(() => {
    setCount((v) => v + 1);
    console.log('in hook  onClickReset  numbers === refValue.current.numbers',  JSON.parse(JSON.stringify(numbers === refValue.current.numbers)), refValue);

    // numbers = []; // won't work
    // refValue.current.numbers = [];
    current.numbers = [];
   
    console.log('in hook after reset = ',  JSON.parse(JSON.stringify(refValue.current.numbers)));
    console.log('in hook after  numbers  = ',  JSON.parse(JSON.stringify(numbers)));

  }, [setCount, current, numbers, refValue]);
   

  return (
    <>
    <div onClick={onClickAdd}>
       Add
    </div>
    <div onClick={onClickReset}>
      Reset
  </div>
  <div onClick={onClickAdd}>
       Values: {refValue.current.numbers.join(', ')}
    </div>
  </>
  );
}

