import Checkbox from '@mui/material/Checkbox';
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import {useContext} from "react";
import {NoteStateContext} from "../../context/notes/noteContext";


const useStyles = makeStyles((theme) => ({
    entry: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        margin: theme.spacing(1)
    },
    task: {
        alignSelf: "center",
        flexGrow: 2,
    }
}));


export default function Todos(){

    const {todos} = useContext(NoteStateContext);
    const classes = useStyles();

    return todos.map((todo)=> (
        <div className={classes.entry} key={todo.todoId}>
            <Typography className={classes.task} variant="body2">{todo.task}</Typography>
            <Checkbox checked={todo.isTaskDone}/>
        </div>
    ))

}