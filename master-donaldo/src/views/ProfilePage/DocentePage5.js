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

import general1 from "assets/img/docentes/general/general1.png";
import general2 from "assets/img/docentes/general/general2.png";
import general3 from "assets/img/docentes/general/general3.png";
import general4 from "assets/img/docentes/general/general4.png";
import general5 from "assets/img/docentes/general/general5.png";
import general6 from "assets/img/docentes/general/general6.png";

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

  const name = "Educación Media General";

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
                      src={general1}
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
                        <strong>DAINELYS DEL ROSARIO RODRIGUEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      T.S.U. EN QUÍMICA.
                      <br />
                      PROFESORA DE BIOLOGÍA Y QUÍMICA.
                      <br />
                      3ER A 5TO AÑO EDUCACIÓN MEDIA GENERAL.
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
                      src={general2}
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
                        <strong>DOUGLAS JOSÉ GUTIERREZ PRIETO</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDO. EN EDUCACION MENCION LENGUA Y LITERATURA.
                      <br />
                      ESP. ESEÑANZA DE LA LENGUA.
                      <br />
                      PROFESOR DE CASTELLANO Y LITERATURA.
                      <br />
                      1ER A 5TO AÑO EDUCACIÓN MEDIA GENERAL.
                      <br />
                      COORDINADOR DE DISCIPLINA Y CONVIVENCIA.
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
                      src={general3}
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
                        <strong>YELITZA DEL ROSARIO VARGAS DÍAZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LICENCIADA EN EDUCACIÓN; MENCIÓN. MATEMÁTICA – FÍSICA.
                      <br />
                      MAGISTER SCIENTIARUM EN SUPERVISIÓN EDUCATIVA.
                      <br />
                      PROFESORA DE MATEMATICAS.
                      <br />
                      2DO Y 3ER AÑO.
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
                      src={general4}
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
                        <strong>YOLEIRIS NATHALI AÑEZ ARTEAGA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUCACIÓN MENCIÓN CIENCIAS SOCIALES.
                      <br />
                      PROFESORA DE GEOGRAFIA, HISTORIA Y CIUDADANIA.
                      <br />
                      1ER A 5TO AÑO
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
                      src={general5}
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
                        <strong>LUIS ALBERTO PALENCIA VANEGAS</strong>
                      </h5>
                    </Danger>
                    <h6>
                      PROFESOR EN EDUCACIÓN MENCIÓN MATEMÁTICAS.
                      <br />
                      PROFESOR DE MATEMÁTICAS Y FÍSICAS.
                      <br />
                      1ER , 3ER 4TO Y 5TO AÑO.
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
                      src={general6}
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
                        <strong>ANDREA CAROLINA ESTRADA QUINTERO</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUCACION MENCIÓN BIOLOGÍA.
                      <br />
                      PROFESORA DE CIENCIAS DE LA NATURALES Y BIOLOGIA.
                      <br />
                      1ER A 3ER AÑO.
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

