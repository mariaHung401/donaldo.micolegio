import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Pagina Principal
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Reseña-Historica" className={classes.navLink}>
          Reseña Histórica
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Filosofia" className={classes.navLink}>
          Filosofía
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Equipo Docente"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={AccountCircleIcon}
          dropdownList={[
            <Link to="/Directivos" className={classes.navLink}>
              Directivos
            </Link>,
            <Link to="/Administrativo" className={classes.navLink}>
              Administrativo
            </Link>,
            <Link to="/Educación-Inicial" className={classes.navLink}>
              Educación Inicial
            </Link>,
            <Link to="/Educación-Primaria" className={classes.navLink}>
              Educación Primaria
            </Link>,
            <Link to="/Educación-Media-General" className={classes.navLink}>
              Educación Media General
            </Link>,
            <Link to="/Educación-Especialistas" className={classes.navLink}>
              Educación Especialistas
            </Link>,
            <Link to="/Obreros" className={classes.navLink}>
              Bedeles
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}