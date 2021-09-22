import {Box, CardContent, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
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
}));

export default function AttachmentButtonBox({note}) {

    const classes = useStyles();
    const [showAttachment, setShowAttachment] = useState("")

    const noAppointmentString = "Du hast noch keine Termine für diese Notiz";
    const noGalleryString = "Du hast noch keine Gallerie für diese Notiz";
    const noLinkString = "Du hast noch keine Links für diese Notiz";

    return (
        <>
            <Box className={classes.options}>
                <Button className={classes.button} onClick={()=> setShowAttachment("Termine")}>Termine</Button>
                <Button className={classes.button} onClick={()=> setShowAttachment("Gallerie")}>Gallerie</Button>
                <Button className={classes.button} onClick={()=> setShowAttachment("Links")}>Links</Button>
            </Box>
            <CardContent className={classes.detailsContent} hidden={showAttachment === ""}>
                {showAttachment === "Termine" &&
                <Typography variant="body2" color="text.secondary">
                    {note.appointments ? note.appointments : noAppointmentString}
                </Typography>}
                {showAttachment === "Gallerie" &&
                <Typography variant="body2" color="text.secondary">
                    {note.gallery ? note.gallery : noGalleryString}
                </Typography>
                }
                {showAttachment === "Links" &&
                <Typography variant="body2" color="text.secondary">
                    {note.links ? note.links : noLinkString}
                </Typography>
                }
            </CardContent>
        </>
    )

}