

import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {

  return createStyles({
    root: {
      display: 'flex',
    },
    two: {
      border: '1px solid lightgreen',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.5)',
    }
  });
});
