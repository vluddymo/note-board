import React, {useState} from "react";
import AddNoteDialogue from "../AddNoteDialogue/AddNoteDialogue";
import {Fab, makeStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
        footer: {
            marginTop: theme.spacing(1),
            textAlign: "center",
            borderRadius: "100% 100% 0 0 ",
            backgroundColor: "#8bf594",
            padding: theme.spacing(1.5),
}
}));


export default function DashboardFooter() {

    const classes = useStyles();

    const [showAddDialog, setShowAddDialog] = useState(false);

    const handleClickOpen = () => {
        setShowAddDialog(true);
    }


    return (
        <footer className={classes.footer} >
            <Fab color="primary"
                 aria-label="add"
                 onClick={handleClickOpen}
                 size={"small"}

            >
                <AddIcon/>
            </Fab>
            <AddNoteDialogue
                open={showAddDialog}
                handleClose={() => setShowAddDialog(false)}
            />
        </footer>
    )

}