import {Box, Card, CardHeader, IconButton} from "@material-ui/core";
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import {green} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AttachmentButtonBox from "./DetailsButtonBox/AttachmentButtonBox";
import Todos from "../Entries/Todos";


const useStyles = makeStyles((theme)=>({
    card: {
        width: "100%",
        flexGrow: "4",
        alignSelf: "center",
    },
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: theme.spacing(1)
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
    content: {
        padding: "0",
        width: "85%",
        margin: "auto",
        border: "solid 2px",
        borderRadius: "12px",
        borderColor: "#edff21",
        marginBottom: theme.spacing(1),
        backgroundColor: "white",
        height: "30vh"
    },
    description: {
        margin: theme.spacing(1),

    },
}));

export default function NoteDetailsCard({note}){

    const [showContent, setShowContent] = useState("content");

    const classes = useStyles();

    return (

    <Card className={classes.card}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: green[500]}} aria-label="recipe">
                    KD
                </Avatar>
            }
            action={
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            }
            title={note.title}
            subheader={note.date}
        />
        <Box className={classes.options}>
            <Button onClick={() => setShowContent("content")} className={classes.button}>Scribble</Button>
            <Button onClick={() => setShowContent("todo")} className={classes.button}>ToDos</Button>
        </Box>
        <Box hidden={showContent !== "content"} className={classes.content}>
            <Typography variant="body2" className={classes.description}>{note.content}</Typography>
        </Box>
        <Box hidden={showContent !== "todo"} className={classes.content}>
        <Todos/>
        </Box>
        <AttachmentButtonBox noteId={note.id}/>
    </Card>
)

}