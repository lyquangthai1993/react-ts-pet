import {Box, Button, makeStyles, Paper, Typography} from "@material-ui/core";
import * as React from 'react';

export interface LoginPageProps {
}
const useStyles = makeStyles(theme =>( {
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
   },
   box:{

   }
}));
export default function LoginPage(props: LoginPageProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Hello
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
