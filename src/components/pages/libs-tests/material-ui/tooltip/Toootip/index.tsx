import { default as MuiTooltip } from '@material-ui/core/Tooltip';
import { ReactElement } from 'react';

export type TooltipProps = {
  children: ReactElement;
  title: string;
};
export function Tooltip({ children, title }: TooltipProps) {
  return (
    <MuiTooltip title={title} placement="top" enterDelay={500} leaveDelay={200}>
      {children}
    </MuiTooltip>
  );
}
