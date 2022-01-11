import { useCallback } from 'react';
import { useStyles } from './styles';


export type PropsType = any;

export function ClickAndDoubleClick(props: PropsType) {
    const classes = useStyles();

    const handleClick = useCallback((e) => {
        if(e.nativeEvent.detail > 1){
            console.log('handle Double click!', e.nativeEvent.detail);
        } else {
            console.log('handle click!', e.nativeEvent.detail);
        }
    }, []);

    const handleDoubleClick = useCallback((e) => {

        if(e.nativeEvent.detail > 1){
            console.log('handle Double click!', e.nativeEvent.detail);
        } else {
            console.log('handle click!', e.nativeEvent.detail);
        }

    
    }, []);

    return (
    <div className={classes.button1} 
    onClick={handleClick} 
    // onDoubleClick={handleDoubleClick}
    >
        Click me
     </div>
    );
}

