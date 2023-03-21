/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./IntroCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Icon, Paper, Typography } from "@material-ui/core";
import Rito from "../Images/rito.jpg";
import { Instagram, GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function IntroCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid className="intro" container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img className="intro-image" src={Rito} alt="Intro Image"></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Icon>
              <Instagram></Instagram>
            </Icon>
            <Icon>
              <GitHub></GitHub>
            </Icon>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
