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

import obreros1 from "assets/img/docentes/obreros/obreros1.png";
import obreros2 from "assets/img/docentes/obreros/obreros2.png";
import obreros3 from "assets/img/docentes/obreros/obreros3.png";

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

  const name = "Bedeles";

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
                      src={obreros1}
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
                        <strong>EDWUIN JESÚS AGUIRRE</strong>
                      </h5>
                    </Danger>
                    <h6>
                      MANTENIMIENTO Y SEGURIDAD.
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
                      src={obreros2}
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
                        <strong>DANNISETH GARCIA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      OBRERA.
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
                      src={obreros3}
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
                        <strong>MARÍA LUISA GALLARDO</strong>
                      </h5>
                    </Danger>
                    <h6>
                      OBRERA.
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

