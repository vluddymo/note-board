import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        width: "20%",
        backgroundColor: "#4caf50",
        borderRadius: 10,
        alignSelf: "center",
        fontWeight: "normal",
        fontSize: "small"
    },
}));

export default function ContentSwitchButton({children}) {

    const classes = useStyles();

    return (

        <Button className={classes.button}>
            {children}
        </Button>

    )
}