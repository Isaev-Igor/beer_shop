import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography,} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: 40,
        margin: 5,
        display: 'flex',
        justifyContent: 'center'
    },
});

const Catalog = ({loading, currentItem}) => {
    const classes = useStyles();

    if (!loading) {
        return <h2> Loading... </h2>
    }
    return (
        <Grid container xs={12} spacing={1}>
            {currentItem.map(el => (
                <Grid item xs={4} spacing={1}>
                    <Card className={classes.root} key={el.id}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={el.image_url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {el.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {el.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>


            ))}

        </Grid>

    );
}

export default Catalog;
