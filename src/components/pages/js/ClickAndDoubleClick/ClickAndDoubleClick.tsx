import { useCallback} from 'react';
import { useStyles } from './styles';
import { useClickAndDoubleClickHandler } from './useClickAndDoubleClickHandler';

export type PropsType = any;

export function ClickAndDoubleClick(props: PropsType) {
    const classes = useStyles();
    const handleClick = useCallback((e) => {

         console.log('handle click!', e.nativeEvent.detail);

    }, []);

    const handleDoubleClick = useCallback((e) => {


            console.log('handle Double click!', e.nativeEvent.detail);


    
    }, []);

    const commonHandler = useClickAndDoubleClickHandler(handleClick, handleDoubleClick);


    return (
    <div className={classes.button1} 
    
    // ref={buttonRef}
    onClick={commonHandler} 
    // onDoubleClick={handleDoubleClick}
    >
        Click me
     </div>
    );
}

