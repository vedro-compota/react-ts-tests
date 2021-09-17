// import {  TextField } from '@material-ui/core';
import './FlexWithSpanChild.css';
export type PropsType = any;


 export default function FlexWithSpanChild({value} : PropsType)  {
  
    
  return (
<>
<div className='FlexWithSpanChild-root'>
  <span className={"FlexWithSpanChild-myspan"}> </span>
  <div className={'FlexWithSpanChild-column'}>
  </div>     
</div>


<div className='with-input'>
    <div className='FlexWithSpanChild-root'>
        <span className={"FlexWithSpanChild-myspan"}> </span>
        <div className={'FlexWithSpanChild-column'}>
          <input className={'FlexWithSpanChild-input'} />
          {/* <TextField  className={'FlexWithSpanChild-input'} /> */}
          </div>     
    </div>
    </div>
    </>
  );
};