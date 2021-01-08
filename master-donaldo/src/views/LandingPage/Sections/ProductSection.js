import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const name = "Reseña Histórica del Plantel";
  const text =
    "Donaldo García López, hoy Complejo Educativo Privado, fue fundado por la iniciativa de las Señoras: Ana Carolina González e Isabel Romero de Sandoval y otras madres y padres preocupados que querían que en nuestro pueblo funcionara un colegio privado donde se impartiera una buena educación.";

  return (
    <div className={classes.section}>
      <GridContainer justify="center"> 
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>{name}</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5>
            <strong>La Unidad Educativa: </strong> {text}
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
