import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        width: "100%",
        alignContent: "center",
        padding: "0 0 0 0",
        background: "transparent"

    },
});

export default function PageFrame({children}){

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {children}
        </Container>
    )
}