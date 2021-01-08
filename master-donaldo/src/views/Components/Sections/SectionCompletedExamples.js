import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import image1 from "assets/img/img/class4.jpg";
import image2 from "assets/img/img/class10.jpg";
import image3 from "assets/img/img/class3.jpg";
import image4 from "assets/img/img/class5.jpg";
import image5 from "assets/img/img/class.jpg";
import image6 from "assets/img/img/class11.jpg";

import Info from "components/Typography/Info.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const name = "Objetivo Institucional";

  const text = {
    message:
      "Establecer normas y disposiciones que regirá el funcionamiento y la organización interna de la institución: Unidad Educativa  “Donaldo García López”,  es una institución destinada a la educación en los niveles de educación inicial, y las etapas de educación básica y media diversificada establecidas por el Ministerio de Educación del Poder Popular para la Educación de la República Bolivariana de Venezuela. El Reglamento Disciplinario es de carácter normativo y pedagógico de obligatorio cumplimiento para la sana convivencia de la comunidad educativa.",
    subtextblue: "Finalidades",
    message2:
      "La finalidad es garantizarles a los estudiantes una educación integral de calidad que contribuya al amor de dios, al ser humano y a la patria, a través de virtudes y valores como institución democrática, social, cultural de derechos y justicia como lo establece el estado venezolano.",
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <h3 className={classes.title}>
              <strong>{name} </strong>
            </h3>
            <h4>{text.message} </h4>
            <Info>
              <strong>{text.subtextblue} </strong>
            </Info>
            <h4>{text.message2} </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image3} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image5} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image6} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
