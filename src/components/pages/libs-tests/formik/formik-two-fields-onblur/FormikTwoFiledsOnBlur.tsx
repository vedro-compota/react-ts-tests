import {  useEffect, useState } from "react";
import { First } from "./First";
import { SecondAppeared } from "./SecondAppeared";


export type PropsType = any;


/**
 * "Maximum update depth exceeded" error demo
 */
export function FormikTwoFiledsOnBlur({some}: PropsType)  {

   const [showSecond, setShowSecond] = useState(false);



   useEffect(
    () => {
      let timer1 = setTimeout(() => 
      
      { 
        console.log('---------------START!!');
        setShowSecond(true)}, 3000);

      return () => {
        clearTimeout(timer1);
      };
    },
    [setShowSecond]
  );

  console.log('--------------Render Parent');

   return (
    <>

          <First />
          {showSecond ? <SecondAppeared /> : null}


     {/* { show ? 
        (<>
          <First />
          {showSecond ? <SecondAppeared /> : null}
        </>)
        : null
      }
        <div onClick={handleClick}>Show</div> */}
    </>
   );

}