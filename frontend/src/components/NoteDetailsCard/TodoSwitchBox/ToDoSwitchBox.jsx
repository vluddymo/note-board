import {Box, CardContent, makeStyles} from "@material-ui/core";
import {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme)=>({
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "10px"
    },
    content: {
        width: "85%",
        margin: "auto",
        border: "solid 2px",
        borderRadius: "12px",
        borderColor: "#4caf50",
        marginBottom: "10px",
        backgroundColor: "white",
    },
    button: {
        margin: theme.spacing(1),
        width: "20%",
        backgroundColor: "#4caf50",
        borderRadius: 10,
        alignSelf: "center",
        fontWeight: "normal",
        fontSize: "small"
    },
}));

export default function ToDoSwitchBox({note}) {

    const [showContent, setShowContent] = useState("content");
    const classes = useStyles();
    const noDataString = "Du hast noch keine Todos für diese Notiz";

    return (
        <>
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
        </>
    )
}