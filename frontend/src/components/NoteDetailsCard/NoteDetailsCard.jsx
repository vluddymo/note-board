import {Card, CardActions, CardContent, CardHeader, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import {green} from "@material-ui/core/colors";
import AttachmentButtonBox from "./DetailsButtonBox/AttachmentButtonBox";
import {makeStyles} from "@material-ui/core";
import ToDoSwitchBox from "./TodoSwitchBox/ToDoSwitchBox";

const useStyles = makeStyles({
    card: {
        backgroundColor: "#f0f3d2",
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
    detailsContent: {
        width: "85%",
        margin: "auto",
        border: "solid 2px",
        borderRadius: "12px",
        borderColor: "#4caf50",
        marginBottom: "10px",
        backgroundColor: "white",
        height: "30vh"
    }

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
        <ToDoSwitchBox/>
        <CardContent className={classes.content}>
            <Typography variant="body2" color="text.secondary">
                {note.content}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <AttachmentButtonBox/>
        </CardActions>
            <CardContent className={classes.detailsContent}>
            </CardContent>
    </Card>
)

}