import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ritobrita De
          </Typography>
          <Grid item lg={7} md={2} sm={0}></Grid>
          <Button color="inherit">About Me</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Life</Button>
          <Button color="inherit">Contact Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
