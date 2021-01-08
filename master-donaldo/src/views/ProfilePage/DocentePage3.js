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

import inicial1 from "assets/img/docentes/inicial/inicial1.png";
import inicial2 from "assets/img/docentes/inicial/inicial2.png";
import inicial3 from "assets/img/docentes/inicial/inicial3.png";
import inicial4 from "assets/img/docentes/inicial/inicial4.png";
import inicial5 from "assets/img/docentes/inicial/inicial5.png";

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
                      src={inicial1}
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
                        <strong>FAVIOLA MARGARITA BELLO ORDÓÑEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LICENCIADA EN EDUCACIÓN ESPECIAL.
                      <br />
                      MAESTRA DE EDUCACIÓN INICIAL.
                      <br />
                      SALA MATERNAL.
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
                      src={inicial2}
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
                        <strong>MARÍA JOSÉ MONTERO DE PALENCIA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUCACIÓN INICIAL.
                      <br />
                      SALA MATERNAL.
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
                      src={inicial3}
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
                        <strong>LUZ MERY MARTÍNEZ PRIMERA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EDUCACION INICIAL.
                      <br />
                      MAGISTER EN SUPERVISIÓN EDUCATIVA.
                      <br />
                      SALA DE 3 AÑOS.
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
                      src={inicial4}
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
                        <strong>MAIRALY COROMOTO MARTÍNEZ MARTÍNEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUCACION PREESCOLAR.
                      <br />
                      SALA DE 4 AÑOS.
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
                      src={inicial5}
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
                        <strong>ADA LILIA CUELLO ZAMBRANO</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUCACION INICIAL.
                      <br />
                      MGS. EN SUPERVICIÓN EDUCATIVA.
                      <br />
                      SALA DE 5 AÑOS.
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

