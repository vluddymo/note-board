import React from "react";
import {makeStyles} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import Avatar from "@mui/material/Avatar";
import DetailsButton from "../NoteCard/DetailsButton/DetailsButton";
import SettingsButton from "../NoteCard/SettingsButton/SettingsButton";

const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: theme.spacing(1),
        display: "flex",
        alignContent: "center",
        backgroundColor: "#8bf594",
        padding: theme.spacing(0.5),
    },
    buttonBox: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        justifySelf: "stretch",
    },
    avatar: {
        alignSelf: "center",
    }
}));


export default function DashboardHeader() {

    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.buttonBox}>
                <DetailsButton/>
                <Avatar sx={{bgcolor: blue[900]}} aria-label="recipe" size={"small"} className={classes.avatar}>
                    KD
                </Avatar>
                <SettingsButton/>
            </div>
        </header>
    );
}