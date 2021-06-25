

import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {

  return createStyles({
    right: {
        height: 100,
        border: '1px solid #000',
        width: '100%',
        borderRadius: 5,
    },
  });
});
