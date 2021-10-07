import {Switch, makeStyles} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    switch: {
        display: "flex",
        justifyContent : "flex-end"
    }
}))

export default function AlarmSwitch(){

    const classes = useStyles();

    return <div className={classes.switch}><Switch color="primary"/></div>
}