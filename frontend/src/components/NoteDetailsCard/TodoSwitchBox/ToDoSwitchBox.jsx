import {Box, CardContent, Container, makeStyles} from "@material-ui/core";
import {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme)=>({
    container: {
        flexGrow: 2
    },
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: theme.spacing(1)
    },
    content: {
        width: "85%",
        margin: "auto",
        border: "solid 2px",
        borderRadius: "12px",
        borderColor: "#edff21",
        marginBottom: theme.spacing(1),
        backgroundColor: "white",
    },
    button: {
        margin: theme.spacing(0.5),
        width: "30%",
        backgroundColor: "#edff21",
        borderRadius: 10,
        alignSelf: "center",
        color: "black",
        fontWeight: "normal",
        fontSize: "x-small"
    },
}));

export default function ToDoSwitchBox({note}) {

    const [showContent, setShowContent] = useState("content");
    const classes = useStyles();
    const noDataString = "Du hast noch keine Todos für diese Notiz";

    return (
        <Container className={classes.container}>
            <Box className={classes.options}>
                <Button onClick={() => setShowContent("content")} className={classes.button}>Scribble</Button>
                <Button onClick={() => setShowContent("todo")} className={classes.button}>ToDos</Button>
            </Box>
            <CardContent className={classes.content}>
                {showContent === "content" &&
                <Typography variant="body2" color="text.secondary">
                    {note.content}
                </Typography>}
                {showContent === "todo" &&
                <Typography variant="body2" color="text.secondary">
                    {note.todo ? note.todo : noDataString}
                </Typography>
                }
            </CardContent>
        </Container>
    )
}