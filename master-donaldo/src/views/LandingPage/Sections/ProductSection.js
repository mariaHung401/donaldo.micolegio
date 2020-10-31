import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Reseña Histórica del Plantel</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5>
            <strong>La Unidad Educativa: </strong>Donaldo García López, hoy
            Complejo Educativo Privado, fue fundado por la iniciativa de las
            Señoras: Ana Carolina González e Isabel Romero de Sandoval y otras
            madres y padres preocupados que querían que en nuestro pueblo
            funcionara un colegio privado donde se impartiera una buena
            educación.
          </h5>
          <h5>
            El Complejo Educativo Privado Donaldo García López nace de una
            Institución Preescolar dirigida por la T.S.U. Ana Carolina González
            y en el año 1990 se traslada a la sede actual de la Calle Oriente de
            Villa del Rosario. En ese momento se le da el nombre de Unidad
            Educativa Donaldo García López, con una guardería (maternal),
            Educación Preescolar (los tres niveles) y primer grado de Educación
            Básica. Así continuó el proceso de crecimiento hasta completar 1era
            y 2da etapa (nivel) de educación básica.
          </h5>
          <h5>
            Para el año escolar 1996 – 97 se inicia, el 7mo grado con 32 alumnos
            y sucesivamente en los años siguiente se fueron incorporando los
            demás años de bachillerato (antes III etapa de educación básica),
            hasta completar el ciclo completo hasta el 5to año en el periodo
            escolar 2000 – 2001 desde allí la institución ha logrado egresar
            promociones sucesivas de bachilleres en ciencias hasta la fecha.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
