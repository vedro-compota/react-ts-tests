
import '@rmwc/tooltip/styles';
import {Tooltip } from '@rmwc/tooltip';


export type PropsType = any;

export function RmwcTooltipDemo({some}: PropsType) {

  return <Tooltip content="Cookies"><div>Some text</div></Tooltip>;

}