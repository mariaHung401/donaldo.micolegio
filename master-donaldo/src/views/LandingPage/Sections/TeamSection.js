import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Filosofía Institucional</h3>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Misión
                <br />
              </h4>
              <CardBody>
                <h5>
                  La Unidad Educativa “Donaldo García López” busca la aplicación
                  y perfeccionamiento de un sistema y metodología educativa que
                  mediante la actividad que demandan los programas vigentes,
                  aporte los elementos que el ser humano, sujeto del proceso,
                  necesita para crecer libre, independiente, capaz, en armonía
                  con el medio en que vive, consciente de su necesidad de
                  comprender y aprender constantemente.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Visión
                <br />
              </h4>
              <CardBody>
                <h5>
                  Ofrecer a la comunidad una opción educativa cuyos postulados y
                  práctica garantizan una preparación activa, real, aplicable a
                  todos los momentos de la convivencia, orientada al logro de un
                  estado duradero de armonía, que sustente la paz, el bienestar
                  y la integración, posibles a partir del ser humano, que
                  convertido en ciudadano independiente, libre y capaz,
                  promoverá un desarrollo material, intelectual y espiritual,
                  acorde con los recursos y vocación nacional.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
