import Box from "@material-ui/core/Box";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    buttonBox: {
        position: 'absolute',
        zIndex: 1,
        bottom: 20,
        left: 0,
        right: 0,
        margin: 'auto',
        display: "flex",
        justifyContent: "space-around",
        width: "50%",
    },
});

export default function ButtonBox({children}) {

    const classes = useStyles();

    return <Box className={classes.buttonBox}>{children}</Box>

}