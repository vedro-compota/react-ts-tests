import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  selectCounter1, selectCounter22 } from './selectors';
import {actions} from './slice';
import { useStyles } from './styles';


export type PropsType = any;

export function SagaAllEffects(props: PropsType) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const counter1 = useSelector(selectCounter1);
    //const counter2 = useSelector(selectCounter2);

    const counter22 = useSelector(selectCounter22);



    const put = useCallback( () => {
        console.log('click! put');   
        dispatch(actions.testPut())
    }, [dispatch]);

    const allPut = useCallback( () => {
        console.log('click allPut!');   
        dispatch(actions.testAllPut())
    }, [dispatch]);



    console.log('render with:', counter1, counter22);
    return (
    <>
    <div> Счетчик1: {counter1}</div>
    <div> Счетчик2: {counter22}</div>

    <div className={classes.button1} onClick={put}>
        Просто put
     </div>
     <div className={classes.button1} onClick={allPut}>
        All(put)
     </div>
    </>
    );
}

