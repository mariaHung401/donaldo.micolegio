import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionDownload from "./Sections/SectionDownload.js";

import ProductSection from "views/LandingPage/Sections/ProductSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import logo from "assets/img/colegio/logo.png";

const useStyles = makeStyles(styles);
const dataCollege = {
  collegeName: "U. E. P. Donaldo García López",

  secctionReview: {
    name: "Reseña Histórica del Plantel",
    title: "La Unidad Educativa:",
    text:
      "Donaldo García López, hoy Complejo Educativo Privado, fue fundado por la iniciativa de las Señoras: Ana Carolina González e Isabel Romero de Sandoval y otras madres y padres preocupados que querían que en nuestro pueblo funcionara un colegio privado donde se impartiera una buena educación.",
    fullReview: {
      text2:
        "El Complejo Educativo Privado Donaldo García López nace de una Institución Preescolar dirigida por la T.S.U. Ana Carolina González y en el año 1990 se traslada a la sede actual de la Calle Oriente de Villa del Rosario. En ese momento se le da el nombre de Unidad Educativa Donaldo García López, con una guardería (maternal), Educación Preescolar (los tres niveles) y primer grado de Educación Básica. Así continuó el proceso de crecimiento hasta completar 1era y 2da etapa (nivel) de educación básica.",
      text3:
        "Para el año escolar 1996 – 97 se inicia, el 7mo grado con 32 alumnos y sucesivamente en los años siguiente se fueron incorporando los demás años de bachillerato (antes III etapa de educación básica), hasta completar el ciclo completo hasta el 5to año en el periodo escolar 2000 – 2001 desde allí la institución ha logrado egresar promociones sucesivas de bachilleres en ciencias hasta la fecha.",
    },
  },

  facilitiesImages: {
    name: "Nuestras Instalaciones",
  },

  philosophy: {
    name: "Filosofía Institucional",
  },

  objective: {
    name: "Objetivo Institucional",
    title: "Finalidades",
    text:
      "Establecer normas y disposiciones que regirá el funcionamiento y la organización interna de la institución: Unidad Educativa  “Donaldo García López”,  es una institución destinada a la educación en los niveles de educación inicial, y las etapas de educación básica y media diversificada establecidas por el Ministerio de Educación del Poder Popular para la Educación de la República Bolivariana de Venezuela. El Reglamento Disciplinario es de carácter normativo y pedagógico de obligatorio cumplimiento para la sana convivencia de la comunidad educativa.",
    subtext:
      "La finalidad es garantizarles a los estudiantes una educación integral de calidad que contribuya al amor de dios, al ser humano y a la patria, a través de virtudes y valores como institución democrática, social, cultural de derechos y justicia como lo establece el estado venezolano.",
  },

  feed: {
    title: "Mira Nuestro Instagram",
  },

  contacts: {
    title: "Contácta con Nosotros",
    text: "30 años de Excelencia Educativa en Villa del Rosario",
    number: "0263-4513271",
  },
};

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
        {...rest}
      />

      <Parallax image={require("assets/img/colegio/paper.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h2>
                  <strong>{dataCollege.collegeName}</strong>
                </h2>
              </div>
            </GridItem>
            <GridItem>
              <div className={classes.brand}>
                <img src={logo} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ProductSection props={dataCollege.secctionReview} />

        <SectionCarousel props={dataCollege.facilitiesImages} />

        <TeamSection props={dataCollege.philosophy} />

        <SectionCompletedExamples props={dataCollege.objective} />

        <SectionLogin props={dataCollege.feed} />

        <SectionDownload props={dataCollege.contacts} />
      </div>
      <Footer />
    </div>
  );
}
