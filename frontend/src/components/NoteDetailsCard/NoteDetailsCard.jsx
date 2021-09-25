import {Card, CardHeader, IconButton} from "@material-ui/core";
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import {green} from "@material-ui/core/colors";
import AttachmentButtonBox from "./DetailsButtonBox/AttachmentButtonBox";
import {makeStyles} from "@material-ui/core";
import ToDoSwitchBox from "./TodoSwitchBox/ToDoSwitchBox";

const useStyles = makeStyles({
    card: {
        width: "100%",
        flexGrow: "4",
        alignSelf: "center",
    },
});

export default function NoteDetailsCard({note}){

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
        <ToDoSwitchBox note={note}/>
        <AttachmentButtonBox note={note}/>
    </Card>
)

}