import TextField from '@material-ui/core/TextField';
import IMask from 'imask';
import moment from 'moment';
import React from "react";
import { CodeTextArea } from './CodeTextArea';

const momentFormat = 'YYYY/MM/DD HH:mm';
const dateMask = IMask.createMask(
  {
    mask: Date,
    pattern: momentFormat,
    lazy: false,
    min: new Date(1970, 0, 1),
    max: new Date(2030, 0, 1),

    format: function (date) {
      return moment(date).format(momentFormat);
    },
    parse: function (str) {
      return moment(str, momentFormat);
    },

    blocks: {
      YYYY: {
        mask: IMask.MaskedRange,
        from: 1970,
        to: 2030
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12
      },
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31
      },
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23
      },
      mm: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59
      }
    }
  });

export type DateMaskDemoPropsType = any;


export default function DateMaskDemo(props: DateMaskDemoPropsType) {

  const [shownValue, setShownValue] = React.useState(dateMask.resolve(''));
  const [position, setPosition] = React.useState(0);

  const inputRef: any = React.useRef<HTMLInputElement>(null);

  const handleChange = React.useCallback((evt) => {
    setShownValue(dateMask.resolve(evt.target.value));
    // setShownValue(evt.target.value);
    let position = evt.target.selectionStart;
    setPosition(evt.target.selectionStart);

    inputRef.current.selectionStart = position - 2;
    inputRef.current.selectionEnd = position - 2;

  }, []);



  const setCursor = React.useCallback(() => {
    inputRef.current.selectionStart = position;
    inputRef.current.selectionEnd = position;
  }, [position]);

  React.useEffect(() => {

    if (inputRef !== null) {
      inputRef.current.selectionStart = position - 2;
      inputRef.current.selectionEnd = position - 2;
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
      <div>
        <CodeTextArea 
        onChange={(value: any) => { console.log('value', value); }} 
        value={'Hello world!'}
        />
      </div>
    </>
  );
}