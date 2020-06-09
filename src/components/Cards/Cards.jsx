// This is the card component.

import React from "react";
import { Card, CardContent, Typography, Grid, CardMedia} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames"; //this JS utility helps to join classnames togrther

import styles from "./Cards.module.css";


const Cards = ({data : {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return "Loading ......";
    }

    return(
        <div className ={styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.cards, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <CardMedia 
                            component="img"
                            image="https://image.flaticon.com/icons/png/512/2913/2913465.png"
                            className={styles.image}
                        />
                        <Typography variant = "h6" gutterBottom> 
                            <CountUp start={0} end={confirmed.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" variant="body2">Last Updated : </Typography>
                        <Typography variant="h6" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs={12} md={3} className={cx(styles.cards, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <CardMedia 
                            component="img"
                            image="https://image.flaticon.com/icons/png/512/2913/2913465.png"
                            className={styles.image}
                        />
                        <Typography variant = "h6" gutterBottom>  
                            <CountUp start={0} end={recovered.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" variant="body2">Last Updated : </Typography>
                        <Typography color = "textSecondary" variant = "h6"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant = "body2">Number of Recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs={12} md={3} className={cx(styles.cards, styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <CardMedia 
                            component="img"
                            image="https://image.flaticon.com/icons/png/512/2913/2913465.png"
                            className={styles.image}
                        />
                        <Typography variant = "h6" gutterBottom>  
                            <CountUp start={0} end={deaths.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" variant="body2">Last Updated : </Typography>
                        <Typography color = "textSecondary" variant = "h6">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Numbers of Deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};


export default Cards;