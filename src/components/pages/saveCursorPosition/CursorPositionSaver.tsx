import React from "react";

export type CursorPositionSaverPropsType = any;

export default function CursorPositionSaver(props: CursorPositionSaverPropsType) {

    const [shownValue, setShownValue] = React.useState('');
    const [position, setPosition] = React.useState(0);

    const inputRef: any = React.useRef<HTMLInputElement>(null);

    const handleChange = React.useCallback((evt) => {
        let value = evt.target.value.replace(/_/g, '');
        let newValue = (value.length <= 10) ?
            value + '_'.repeat(10 - value.length) : value;
        setShownValue(newValue);
        setPosition(evt.target.selectionStart - 1);
    }, []);


    React.useEffect(() => {
        if (inputRef !== null) {
            inputRef.current.selectionStart = position;
            inputRef.current.selectionEnd = position;
            console.log('position', position);
        }

    }, [position]);

    console.log('inputRef.current', inputRef.current);

    return (
        <>
            <div>

                <input
    
                    value={shownValue}
                    onChange={handleChange}
                    ref={inputRef}
                />
            </div>
        </>
    );
}