import { useRef } from "react";

export type PropsType = any;

export type Settings = {
  startPoint: number;
  endPoint: number | null;
};

export type SettingsStateType = {
  someId: number,
  settings: Settings[];
};

export const SettingsInitialState: SettingsStateType = {
  someId: 0,
  settings: [
  ],
};

export function UseRefForObjectTest(props: PropsType) {

  const refState = useRef<SettingsStateType>({
    someId: 0,
    settings: [
    ],
  });
  refState.current.settings.push({
    startPoint: 0,
    endPoint: 0,
  });

  console.log('render');

  console.log(refState.current);

  return (
    <div>
       Text
    </div>
  );
}

