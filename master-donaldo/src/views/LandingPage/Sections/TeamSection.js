import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import VM from "assets/img/colegio/misionYvision.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection(props) {
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
    <div className={classes.section}>
      <h3 className={classes.title}>{props.props.name}</h3>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card plain carousel>
              <Carousel {...settings}>
                <div>
                  <img src={VM} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem>
            <Link to="/Filosofia">
              <Button color="info" simple target="_blank">
                <ChevronRightRoundedIcon />
                Seguir leyendo
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

