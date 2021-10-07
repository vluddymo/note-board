import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import {useContext} from "react";
import {NoteStateContext} from "../../context/notes/noteContext";


const useStyles = makeStyles((theme) => ({
    entry: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        padding: theme.spacing(0.5),
        margin: "0",
        backgroundColor: "#8fe89e",
        borderRadius: "2px"
    },
    dateTimeBox: {
        alignSelf: "space-between",
        justifyContent: "flex-start",
        display: "flex",
        flexDirection: "row",
        flexGrow: 2,
        marginBottom: theme.spacing(0.5)
    },
    date: {
        color: "gray",
        flexGrow: 2,
    },
    time: {
        color: "gray",
    },
    appointment: {
    },
}));


export default function Appointments() {

    const {appointments} = useContext(NoteStateContext);
    const classes = useStyles();

    return appointments.sort((a, b) => a.date < b.date).map((appointment) => (
                <div className={classes.entry} key={appointment.appointmentId}>
                    <div className={classes.dateTimeBox}>
                        <Typography className={classes.date} variant="body2">{appointment.appointmentDate}</Typography>
                        <Typography className={classes.time} variant="body2">{appointment.appointmentTime}</Typography>
                    </div>
                    <Typography className={classes.appointment} variant="subheader">{appointment.appointmentDescription}</Typography>
                </div>
            ))
}