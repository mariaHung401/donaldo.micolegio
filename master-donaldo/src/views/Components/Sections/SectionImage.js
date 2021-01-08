import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import image1 from "assets/img/img/entry.jpg";
import image2 from "assets/img/img/classroom.jpg";
import image3 from "assets/img/img/computing.jpg";
import image4 from "assets/img/img/hall.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const name = "Nuestras Instalaciones"
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>{name} </h3>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image4} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image3} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
