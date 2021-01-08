import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "views/HistoryPage/Header.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import image1 from "assets/img/img/class2.jpg";
import image2 from "assets/img/img/class6.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function History() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const name = "Filosofía Institucional";

  const mision = {
    title: "Misión",
    message:
      "La Unidad Educativa “Donaldo García López” busca la aplicación y perfeccionamiento de un sistema y metodología educativa que mediante la actividad que demandan los programas vigentes, aporte los elementos que el ser humano, sujeto del proceso, necesita para crecer libre, independiente, capaz, en armonía con el medio en que vive, consciente de su necesidad de comprender y aprender constantemente.",
  };
  const vision = {
    title: "Visión",
    message:
      "Ofrecer a la comunidad una opción educativa cuyos postulados y práctica garantizan una preparación activa, real, aplicable a todos los momentos de la convivencia, orientada al logro de un estado duradero de armonía, que sustente la paz, el bienestar y la integración, posibles a partir del ser humano, que convertido en ciudadano independiente, libre y capaz, promoverá un desarrollo material, intelectual y espiritual, acorde con los recursos y vocación nacional.",
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
                <h4 className={classes.title}>
                  <strong>{mision.title}</strong>
                  <br />
                </h4>
                <h5>{mision.message}</h5>
                <h4 className={classes.title}>
                  <strong>{vision.title}</strong>
                  <br />
                </h4>
                <h5>{vision.message}</h5>
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
