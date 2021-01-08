import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "views/ProfilePage/Header.js";
import Carousel from "react-slick";
import Danger from "components/Typography/Danger.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import primaria1 from "assets/img/docentes/primaria/primaria1.png";
import primaria2 from "assets/img/docentes/primaria/primaria2.png";
import primaria3 from "assets/img/docentes/primaria/primaria3.png";
import primaria4 from "assets/img/docentes/primaria/primaria4.png";
import primaria5 from "assets/img/docentes/primaria/primaria5.png";

const useStyles = makeStyles(styles);

export default function ProfilePage() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const name = "Educación Inicial";

  return (
    <div>
      <Header />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3 className={classes.title}>
                      <strong>{name}</strong>
                    </h3>
                  </div>
                </div>
              </GridItem>

              <GridItem
                justify="center"
                xs={12}
                sm={10}
                md={4}
                className={classes.navWrapper}
              >
                <Carousel {...settings}>
                  <div>
                    <img
                      src={primaria1}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Danger>
                      <h5>
                        <strong>MARÍA BENILDA ROMERO SÁNCHEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      PROFESORA DE EDUCACIÓN INTEGRAL.
                      <br />
                      MAESTRA DE AULA 1ER GRADO.
                      <br />
                    </h6>
                  </div>
                </Carousel>
              </GridItem>

              <GridItem
                justify="center"
                xs={12}
                sm={10}
                md={4}
                className={classes.navWrapper}
              >
                <Carousel {...settings}>
                  <div>
                    <img
                      src={primaria2}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Danger>
                      <h5>
                        <strong>MAIRIN PAOLA LAGUNA MEDINA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LICENCIA EN EDUCACIÓN MENCIÓN: EDUCACIÓN BÁSICA INTEGRAL.
                      <br />
                      MAESTRA DE AULA 2DO GRADO.
                      <br />
                    </h6>
                  </div>
                </Carousel>
              </GridItem>

              <GridItem
                justify="center"
                xs={12}
                sm={10}
                md={4}
                className={classes.navWrapper}
              >
                <Carousel {...settings}>
                  <div>
                    <img
                      src={primaria3}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Danger>
                      <h5>
                        <strong>KARLA TRIANA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      PROFESORA EN EDUCACIÓN INTEGRAL.
                      <br />
                      MAESTRA DE AULA 3ER GRADO.
                      <br />
                    </h6>
                  </div>
                </Carousel>
              </GridItem>

              <GridItem
                justify="center"
                xs={12}
                sm={10}
                md={4}
                className={classes.navWrapper}
              >
                <Carousel {...settings}>
                  <div>
                    <img
                      src={primaria4}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Danger>
                      <h5>
                        <strong>ANYELA MARÍA GAVIDIA GIL</strong>
                      </h5>
                    </Danger>
                    <h6>
                      PROFESORA EN EDUCACIÓN INTEGRAL.
                      <br />
                      MAESTRA DE AULA 4TO GRADO.
                      <br />
                    </h6>
                  </div>
                </Carousel>
              </GridItem>

              <GridItem
                justify="center"
                xs={12}
                sm={10}
                md={4}
                className={classes.navWrapper}
              >
                <Carousel {...settings}>
                  <div>
                    <img
                      src={primaria5}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Danger>
                      <h5>
                        <strong>NAIBEL DEL CARMEN FINOL RODRÍGUEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LICENCIADA EN EDUCACIÓN MENCIÓN: INTEGRAL.
                      <br />
                      MAESTRA DE AULA 5TO GRGADO.
                      <br />
                    </h6>
                  </div>
                </Carousel>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

