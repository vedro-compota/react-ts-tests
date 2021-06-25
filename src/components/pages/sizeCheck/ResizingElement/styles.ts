

import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {

  return createStyles({
    root: {
      display: 'flex',
    },
    left: {
        height: 100,
        width:  ({ leftWidth}: { leftWidth: number }) => leftWidth,
        backgroundColor: 'lightgreen',
    },
    right: {
        height: 100,
        border: '1px solid #000',
        width: '100%',
        borderRadius: 5,
    },
  });
});
