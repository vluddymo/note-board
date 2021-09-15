import {Container, makeStyles} from "@material-ui/core";
import BoardSurface from "./BoardSurface/BoardSurface";

const useStyles = makeStyles({
    container: {
        background: "black",
        display: "flex",
        height: "90vh",
        flexDirection: "column",
        width: "100%",
        padding: 20,
        alignContent: "center",

    },
});

export default function PageFrame({children}){

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <BoardSurface>
            {children}
            </BoardSurface>
        </Container>
    )
}