import {Box, makeStyles} from "@material-ui/core";
import ContentSwitchButton from "./ContentSwitchButton/ContentSwitchButton";

const useStyles = makeStyles({
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
});

export default function AttachmentButtonBox() {

    const classes = useStyles();

    return (
        <Box className={classes.options}>
            <ContentSwitchButton>Termine</ContentSwitchButton>
            <ContentSwitchButton>Gallerie</ContentSwitchButton>
            <ContentSwitchButton>Links</ContentSwitchButton>
        </Box>
    )

}