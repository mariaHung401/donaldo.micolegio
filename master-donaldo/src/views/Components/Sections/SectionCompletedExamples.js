import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Info from "components/Typography/Info.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>
              <strong>Objetivo Institucional</strong>
            </h3>
            <h4>
              Establecer normas y disposiciones que regirá el funcionamiento y la organización interna de la institución: Unidad Educativa  “Donaldo García López”,  es una institución destinada a la educación en los niveles de educación inicial, y las etapas de educación básica y media diversificada establecidas por el Ministerio de Educación del Poder Popular para la Educación de la República Bolivariana de Venezuela. El Reglamento Disciplinario es de carácter normativo y pedagógico de obligatorio cumplimiento para la sana convivencia de la comunidad educativa.
            </h4>
            <Info>
              <strong>Finalidades</strong>
            </Info>
            <h4>
              La  finalidad es garantizarles a los estudiantes una educación integral de calidad que contribuya al amor de dios, al ser humano y a la patria, a través de virtudes y valores como institución democrática, social, cultural de derechos y justicia como lo establece el estado venezolano.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
