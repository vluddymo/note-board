import {Box, makeStyles} from "@material-ui/core";
import ContentSwitchButton from "../DetailsButtonBox/ContentSwitchButton/ContentSwitchButton";

const useStyles = makeStyles({
    options: {
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "10px"
    },
});

export default function ToDoSwitchBox() {

    const classes = useStyles();

    return (
        <Box className={classes.options}>
            <ContentSwitchButton>Scribble</ContentSwitchButton>
            <ContentSwitchButton>ToDos</ContentSwitchButton>
        </Box>
    )
}