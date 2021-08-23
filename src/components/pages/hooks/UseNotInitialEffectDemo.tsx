import { useCallback, useEffect, useState } from "react";
import { useNotInitialEffect } from "../../../hooks/useNotInitialEffect";

export type PropsType = any;

export function UseNotInitialEffectDemo({some}: PropsType) {


    const [value, setValue] = useState(1);
    const [valueEffect, setValueEffect] = useState(1);

    useNotInitialEffect(() => {

        console.log('Action done in useNotInitialEffect^: ', value);
      }, [value]);
    
      useEffect(() => {
        console.log('Action done in useEffect: ', valueEffect);
      }, [valueEffect]);


      const handleClick = useCallback(() => {
        setValue((value) => value + 1);
        setValueEffect((value) => value + 1);
      }, []);

      const handleClickEffect = useCallback(() => {
        setValueEffect((value) => value + 1);
      }, []);


      return (
        <>
      <div onClick={handleClick}>Click to switch state</div>
      <div onClick={handleClickEffect }>Change onlyEffect</div>
      </>
      );

}