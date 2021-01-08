import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();

  const name = "Contácta con Nosotros";
  const text = "30 años de Excelencia Educativa en Villa del Rosario";
  const number = "0263-4513271";

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>{name} </h2>
            <h6>{text} </h6>
            <h4>
              <strong>{number} </strong>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
