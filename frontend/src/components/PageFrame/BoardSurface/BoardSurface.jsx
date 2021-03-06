import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles({
    boardSurface: {
        backgroundColor: "#317f43",
        alignSelf: "center",
        margin: "0",
        display: "flex",
        borderRadius: "0",
        flexDirection: "row",
        padding: 20,
        alignContent: "space-evenly",
        flexGrow: "1",
        overflowY: "scroll",
    },
});

export default function BoardSurface({children}){

    const classes = useStyles();

    return (

        <Paper className={classes.boardSurface}>
            {children}
        </Paper>

    )
}