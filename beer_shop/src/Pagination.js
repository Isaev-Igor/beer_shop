import React from 'react';
import {Box, Button, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px'

    },
});

const Pagination = ({beerList, totalItems, paginate}) => {
    const classes = useStyles();
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalItems / beerList); i++) {
        pageNumber.push(i)
    }

    return (
        <Box className={classes.root}>
            {pageNumber.map(number => (
                <Box key={number}>
                    <Button href="#" onClick={() => paginate(number)}>{number} </Button>
                </Box>
            ))}
        </Box>
    );
}

export default Pagination;