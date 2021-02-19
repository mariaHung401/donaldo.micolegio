import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "views/HistoryPage/Header.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import image1 from "assets/img/img/class7.jpg";
import image2 from "assets/img/img/class9.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function History(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const name = "Reseña Histórica del Plantel";

  const text = {
    strongmessage: "La Unidad Educativa: ",
    message1:
      "Donaldo García López, hoy Complejo Educativo Privado, fue fundado por la iniciativa de las Señoras: Ana Carolina González e Isabel Romero de Sandoval y otras madres y padres preocupados que querían que en nuestro pueblo funcionara un colegio privado donde se impartiera una buena educación.",
    message2:
      "El Complejo Educativo Privado Donaldo García López nace de una Institución Preescolar dirigida por la T.S.U. Ana Carolina González y en el año 1990 se traslada a la sede actual de la Calle Oriente de Villa del Rosario. En ese momento se le da el nombre de Unidad Educativa Donaldo García López, con una guardería (maternal), Educación Preescolar (los tres niveles) y primer grado de Educación Básica. Así continuó el proceso de crecimiento hasta completar 1era y 2da etapa (nivel) de educación básica.",
    message3:
      "Para el año escolar 1996 – 97 se inicia, el 7mo grado con 32 alumnos y sucesivamente en los años siguiente se fueron incorporando los demás años de bachillerato (antes III etapa de educación básica), hasta completar el ciclo completo hasta el 5to año en el periodo escolar 2000 – 2001 desde allí la institución ha logrado egresar promociones sucesivas de bachilleres en ciencias hasta la fecha.",
  };
  return (
    <div>
      <Header />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h3 className={classes.title}>{name}</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <h5>
                  <strong>{text.strongmessage}</strong> {text.message1}
                </h5>
                <h5>{text.message2} </h5>
                <h5>{text.message3} </h5>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                <Card carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image1}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                    <div>
                      <img
                        src={image2}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

