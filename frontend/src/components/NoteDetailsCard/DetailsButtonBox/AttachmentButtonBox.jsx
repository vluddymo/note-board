import {Box, CardContent, Container, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import Appointments from "../../Entries/Appointments";
import Links from "../../Entries/Links";
import Gallery from "../../Entries/Gallery";
import AddingButton from "../AddingButton/AddingButton";
import ButtonBox from "../../ButtonBox/Buttonbox";

const useStyles = makeStyles((theme) => ({
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
        width: "26%",
        backgroundColor: "#edff21",
        borderRadius: 10,
        alignSelf: "center",
        color: "black",
        fontWeight: "normal",
        zIndex: 10,
        fontSize: "x-small"
    },
    detailsContent: {
        width: "85%",
        margin: "auto",
        border: "solid 2px",
        borderRadius: "12px",
        borderColor: "#edff21",
        marginBottom: "10px",
        backgroundColor: "white",
        height: "30vh",
    },
    gallery: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
        position: "relative"
    }
}));

export default function AttachmentButtonBox({noteId}) {

    const classes = useStyles();
    const [showAttachment, setShowAttachment] = useState("")

/*  const noAppointmentString = "Du hast noch keine Termine für diese Notiz";
    const noGalleryString = "Du hast noch keine Gallerie für diese Notiz";
    const noLinkString = "Du hast noch keine Links für diese Notiz";

 */

    return (
        <Container>
            <Box className={classes.options}>
                <Button className={classes.button} onClick={() => setShowAttachment("Termine")}>Termine</Button>
                <Button className={classes.button} onClick={() => setShowAttachment("Gallerie")}>Gallerie</Button>
                <Button className={classes.button} onClick={() => setShowAttachment("Links")}>Links</Button>
            </Box>
            <CardContent className={classes.detailsContent} hidden={showAttachment === ""}>
                <Box hidden={showAttachment !== "Termine"}>
                    <Appointments/>
                </Box>
                {showAttachment === "Gallerie" &&
                <Box hidden={showAttachment !== "Gallerie"} className={classes.gallery}>
                    <Gallery/>

                </Box>
                }
                <Box hidden={showAttachment !== "Links"}>
                    <Links/>
                </Box>
                <ButtonBox hidden={showAttachment !== "Termine"}>
                <AddingButton noteId={noteId} type={showAttachment}/>
                </ButtonBox>
            </CardContent>
        </Container>
    )

}