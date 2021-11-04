import './AbsoluteOverflowHidden.css';
export type PropsType = any;


 export default function AbsoluteOverflowHidden({value} : PropsType)  {
  
    
  return (
    <div className='some-parent'>
      <div className='relative-subparent'>
        <div className={'absolute-child'}>Need no scroll!</div>    
       </div> 
    </div>
  );
};