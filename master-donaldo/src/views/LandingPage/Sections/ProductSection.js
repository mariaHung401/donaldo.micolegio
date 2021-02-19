import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>{props.props.name}</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5>
            <strong>{props.props.title} </strong> {props.props.text}
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem>
          <Link to="/Reseña-Historica">
            <Button color="info" simple target="_blank">
              <ChevronRightRoundedIcon />
              Seguir leyendo
            </Button>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
}
