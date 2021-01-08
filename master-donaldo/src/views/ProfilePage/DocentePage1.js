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

import direct1 from "assets/img/docentes/directivos/direct1.png";
import direct2 from "assets/img/docentes/directivos/direct2.png";
import direct3 from "assets/img/docentes/directivos/direct3.png";

const useStyles = makeStyles(styles);

function Format() {
  const content = docentes.map((user) =>
    <div key={user.id}>
      <Danger>
        <h5>
          <strong>{user.name}</strong>
        </h5>
      </Danger>
      <h6>
        {user.title} <br /> {user.position} <br />
      </h6>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

const docentes = [
  {
    id: 1,
    name: "NUVIA NELLYS RODRIGUEZ DE MARTINEZ",
    title: "LCDA. EN EDUC. MENCION LENGUA.",
    position: "DIRECTORA ACADEMICA.",
  },
  {
    id: 2,
    name: "LUIS ARMANDON MARTINEZ",
    title: "LCDO. EN EDUCACION MENCIÓN INFORMÁTICA.",
    position: "SUBDIRECTOR. JEFE DE REGISTRO CONTROL Y EVALUACIÓN DE ESTUDIOS.",
  },
  {
    id: 3,
    name: "NOEIMA VEGA DE ROMERO",
    title:
      "LCDA. EN EDUCACIÓN EN MATEMÁTICAS Y FÍSICA. MAGISTER SC EN PLANIFICACIÓN EDUCATIVA.",
    position:
      "ESPECIALISTA EN DIRECCIÓN Y SUPERVISIÓN EDUCATIVA. COORDINADORA PEDAGÓGICA DE INICIAL, PRIMARIA Y MEDIA GENERAL.",
  },
];

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

  const name = "Directivos";
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
                      src={direct1}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Format docentes={docentes} />
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
                      src={direct2}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Format docentes={docentes} />
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
                      src={direct3}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    <Format docentes={docentes} />
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
