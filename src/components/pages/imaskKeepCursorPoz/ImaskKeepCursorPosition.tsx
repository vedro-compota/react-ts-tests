import IMask from 'imask';
import moment from 'moment';
import React from "react";

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

export type ImaskKeepCursorPositionPropsType = any;


export default function ImaskKeepCursorPosition(props: ImaskKeepCursorPositionPropsType) {

  const [shownValue, setShownValue] = React.useState(dateMask.resolve(''));
  const [position, setPosition] = React.useState(0);

  const inputRef: any = React.useRef<HTMLInputElement>(null);

  const [count, setCount] = React.useState(0);

  const handleChange = React.useCallback((evt) => {
    setShownValue(dateMask.resolve(evt.target.value));
    // setShownValue(evt.target.value);
    let position = evt.target.selectionStart;
    console.log('position', position);
    let nearestPoz = dateMask.nearestInputPos(position, 'LEFT');
    console.log('nearestPoz', nearestPoz);
    // setPosition(position + 1);

    setPosition(nearestPoz);
    setCount(previousCount => previousCount > 10 ? 0 : previousCount + 1);

  }, []);


  React.useEffect(() => {

    console.log('effect!');
    if (inputRef !== null) {
      let newPosition = position;
      // if (shownValue[position] === '/') {
      //   newPosition = position + 1;
      // }
      inputRef.current.selectionStart = newPosition;
      inputRef.current.selectionEnd = newPosition;
      console.log('set position', position);
    }
  }, [count, shownValue]);

  console.log('inputRef.current.selectionStart', inputRef?.current?.selectionStart);
  console.log('inputRef.current', inputRef?.current);

  return (
    <>
      <div>
        <input
          value={shownValue}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      <div>

      </div>
    </>
  );
}