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

import administ1 from "assets/img/docentes/administrativo/administ1.png";

import inicial1 from "assets/img/docentes/inicial/inicial1.png";
import inicial2 from "assets/img/docentes/inicial/inicial2.png";
import inicial3 from "assets/img/docentes/inicial/inicial3.png";
import inicial4 from "assets/img/docentes/inicial/inicial4.png";
import inicial5 from "assets/img/docentes/inicial/inicial5.png";

import primaria1 from "assets/img/docentes/primaria/primaria1.png";
import primaria2 from "assets/img/docentes/primaria/primaria2.png";
import primaria3 from "assets/img/docentes/primaria/primaria3.png";
import primaria4 from "assets/img/docentes/primaria/primaria4.png";
import primaria5 from "assets/img/docentes/primaria/primaria5.png";

import general1 from "assets/img/docentes/general/general1.png";
import general2 from "assets/img/docentes/general/general2.png";
import general3 from "assets/img/docentes/general/general3.png";
import general4 from "assets/img/docentes/general/general4.png";
import general5 from "assets/img/docentes/general/general5.png";
import general6 from "assets/img/docentes/general/general6.png";

import especialista1 from "assets/img/docentes/especialistas/especialista1.png";
import especialista2 from "assets/img/docentes/especialistas/especialista2.png";

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
  return (
    <div>
      <Header />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Equipo Docente</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>


            <GridContainer>
              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Directivos</strong>
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
                    <Danger>
                      <h5>
                        <strong>NUVIA NELLYS RODRIGUEZ DE MARTINEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUC. MENCION LENGUA.
                      <br />
                      DIRECTORA ACADEMICA.
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
                    <Danger>
                      <h5>
                        <strong>LUIS ARMANDON MARTINEZ</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDO. EN EDUCACION MENCIÓN INFORMÁTICA.
                      <br />
                      SUBDIRECTOR.
                      <br />
                      JEFE DE REGISTRO CONTROL Y EVALUACIÓN DE ESTUDIOS.
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
                    <Danger>
                      <h5>
                        <strong>NOEIMA VEGA DE ROMERO</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. EN EDUCACIÓN EN MATEMÁTICAS Y FÍSICA.
                      <br />
                      MAGISTER SC EN PLANIFICACIÓN EDUCATIVA.
                      <br />
                      ESPECIALISTA EN DIRECCIÓN Y SUPERVISIÓN EDUCATIVA.
                      <br />
                      COORDINADORA PEDAGÓGICA DE INICIAL, PRIMARIA Y MEDIA
                      GENERAL.
                    </h6>
                  </div>
                </Carousel>
              </GridItem>


              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Administrativo</strong>
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
                      src={administ1}
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
                        <strong>MARILIN ROSA LEON PRIMERA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LCDA. CONTADURIA PÚBLICA
                      <br />
                      SECRETARIA.
                      <br />
                    </h6>
                  </div>
                </Carousel>
              </GridItem>


              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Educación Inicial</strong>
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


              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Educación Primaria</strong>
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


              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Educación Media General</strong>
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


              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Educación Especialistas</strong>
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
                      src={especialista1}
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
                        <strong>ANA MEDINA</strong>
                      </h5>
                    </Danger>
                    <h6>
                      PROFESORA DE LENGUA EXTRANJERA (INGLÉS).
                      <br />
                      DESDE INICIAL HASTA 5TO AÑO DE EDUCACIÓN MEDIA GENERAL.
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
                      src={especialista2}
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
                        <strong>ANDRY DANIEL PINILLO TORRES</strong>
                      </h5>
                    </Danger>
                    <h6>
                      LICENCIADO EN ACTIVIDAD FÍSICA Y SALUD.
                      <br />
                      PROFESOR DE EDUCACIÓN FÍSICA Y DEPORTES.
                      <br />
                      DESDE INICIAL HASTA 5TO AÑO DE EDUCACIÓN MEDIA GENERAL.
                    </h6>
                  </div>
                </Carousel>
              </GridItem>


              <GridItem>
                <div className={classes.profile}>
                  <div>
                    <h3>
                      <strong>Obreros</strong>
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

