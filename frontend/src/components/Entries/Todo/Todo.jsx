import {Typography} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {makeStyles} from "@material-ui/core";
import {useState} from "react";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    entry: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        margin: theme.spacing(1),
        borderRadius: "4px"
    },
    task: {
        alignSelf: "center",
        flexGrow: 2,
        paddingLeft: theme.spacing(1)
    }
}));

export default function Todo({todo}) {

    const classes = useStyles();

    return (
        <Box className={classes.entry} border={todo.isTaskDone ? "1px solid gray" : "2px solid green"}>
            <Typography color={todo.isTaskDone === true ? "gray" : "black"} className={classes.task}
                        variant="body2">{todo.task}</Typography>
            <Checkbox checked={todo.isTaskDone}/>
        </Box>
    )
}