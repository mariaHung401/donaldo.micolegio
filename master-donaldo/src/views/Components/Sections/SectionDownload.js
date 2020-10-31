import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Contácta con Nosotros</h2>
            <h6>30 años de Excelencia Educativa en Villa del Rosario</h6>
            <h4>
              <strong>0263-4513271 </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Siguenos!!</h3>
          </GridContainer>
          <Button
            color="google"
            href="https://www.instagram.com/uedonaldog/"
            target="_blank"
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
            Instagram
          </Button>
        </div>
      </div>
    </div>
  );
}
