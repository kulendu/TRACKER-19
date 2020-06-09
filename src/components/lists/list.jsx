import React from "react";
import { CardContent, Typography, Grid, CardMedia} from "@material-ui/core";
import Styles from "../lists/list.module.css";


function Lists() {
    return(
        <div className={Styles.container} >
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={5} className={Styles.cards} >
                        <CardMedia
                            component="img"
                            image="https://img.icons8.com/pastel-glyph/2x/home.png"
                        />
                        <CardContent>
                            <Typography color = "textSecondary" align="center" gutterBottom variant="h6">Stay home</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={5} className={Styles.cards}>
                        <CardMedia 
                            component="img"
                            image="https://img.icons8.com/dotty/2x/woman-with-a-suitcase.png"
                        />
                        <CardContent>
                            <Typography color = "textSecondary" align="center" gutterBottom variant="h6">Keep a safe distance </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={5} className={Styles.cards}>
                        <CardMedia
                            component="img"
                            image="https://img.icons8.com/pastel-glyph/2x/wash-your-hands.png"
                        />
                        <CardContent>
                            <Typography color = "textSecondary" align="center" gutterBottom variant="h6">Wash hands often</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={5} className={Styles.cards}>
                        <CardMedia
                            component="img"
                            image="https://img.icons8.com/carbon-copy/2x/protection-mask.png"
                        />
                        <CardContent>
                            <Typography color = "textSecondary" align="center" gutterBottom variant="h6">Cover your cough</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={5} className={Styles.cards}>
                        <CardMedia
                            component="img"
                            image="https://img.icons8.com/wired/2x/being-sick.png"
                        />
                        <CardContent>
                            <Typography color = "textSecondary" align="center" gutterBottom variant="h6">Sick? Call the helpline or visit your nearest medical facilty</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
        </div>
    )
};

export default Lists;