import TextField from '@material-ui/core/TextField';
import React from "react";



export type CursorPositionSaverPropsType = any;


export default function CursorPositionSaver(props: CursorPositionSaverPropsType) {

    const [shownValue, setShownValue] = React.useState('');
    const [position, setPosition] = React.useState(0);

    const inputRef: any = React.useRef<HTMLInputElement>(null);

    const handleChange = React.useCallback((evt) => {
        console.log('source', evt.target.value);
        let value = evt.target.value.replace(/_/g, '');
        console.log('value', value);
        let newValue = (value.length <= 10) ?
            value + '_'.repeat(10 - value.length) : value;
        console.log('new value', newValue);
        setShownValue(newValue);

        let position = evt.target.selectionStart;
        setPosition(evt.target.selectionStart);

    }, []);



    const setCursor = React.useCallback(() => {
        inputRef.current.selectionStart = position;
        inputRef.current.selectionEnd = position;
    }, [position]);

    React.useEffect(() => {

        if (inputRef !== null) {
            inputRef.current.selectionStart = position;
            inputRef.current.selectionEnd = position + 1;
            console.log('position', position);
        }

    }, [position]);

    console.log('inputRef.current', inputRef.current);




    return (
        <>
            <div>
                <TextField
                    label='test'
                    value={shownValue}
                    onChange={handleChange}
                    ref={inputRef}
                    onKeyDown={setCursor}
                />
            </div>
        </>
    );
}