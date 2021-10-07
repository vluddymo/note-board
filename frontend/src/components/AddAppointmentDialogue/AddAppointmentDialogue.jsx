import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, makeStyles, Switch,
    TextField,
    Typography
} from "@material-ui/core";
import {useContext, useEffect, useState} from "react";
import {NoteDispatchContext, NoteStateContext} from "../../context/notes/noteContext";
import Stack from '@mui/material/Stack';
import {addAppointment} from "../../context/notes/contentActions";

const useStyles = makeStyles((theme) => ({
    switch: {
        display: "flex",
        justifyContent : "flex-end"
    }
}))


export default function AddAppointmentDialogue(props) {

    const classes = useStyles();

    const dispatch = useContext(NoteDispatchContext);
    const {addAppointmentStatus} = useContext(NoteStateContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [appointmentDescription, setAppointmentDescription] = useState("");
    const [onAlert, setOnAlert] = useState(false);

    useEffect(() => {
        if (addAppointmentStatus === "SUCCESS") {
            setDate("");
            setTime("");
            setOnAlert(false);
            setAppointmentDescription("");
            props.handleClose();
        }
    }, [addAppointmentStatus])

    function buildDataPackage() {
        const appointmentData = {
            appointmentDescription: `${appointmentDescription}`,
            appointmentDate: `${date}`,
            appointmentTime: `${time}`,
            onAlert: `${onAlert}`,
        };
        console.log(appointmentData.appointmentDescription.toString());
        console.log(appointmentData.appointmentDate.toString());
        console.log(appointmentData.appointmentTime.toString());
        console.log(appointmentData.onAlert.toString());
        return appointmentData
    }

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleTimeChange(event) {
        setTime(event.target.value)
    }

    function handleDescriptionChange(event) {
        setAppointmentDescription(event.target.value)
    }

    function handleSubmit() {
        addAppointment(dispatch, props.noteId, buildDataPackage())
    }


    return (
        <Dialog
            open={props.open}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Neuer Termin</DialogTitle>
            <DialogContent>
                <div className={classes.switch}>
                    <Switch color="primary" checked={onAlert} onChange={() => setOnAlert(true)}/>
                </div>
                <form>
                    <Stack component="form" noValidate spacing={3}>
                        <TextField
                            id="date"
                            label="Datum"
                            type="date"
                            defaultValue="2017-05-24"
                            value={date}
                            onChange={handleDateChange}
                            sx={{width: 220}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="time"
                            label="Zeit"
                            type="time"
                            value={time}
                            onChange={handleTimeChange}
                            defaultValue="07:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{width: 150}}
                        />
                    </Stack>
                </form>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={appointmentDescription}
                        onChange={handleDescriptionChange}
                        label="Termin Beschreibung"
                        margin="normal"
                        spellCheck={false}
                    />
                </form>
                {addAppointmentStatus === 'PENDING' && <Typography>loading...</Typography>}
                {addAppointmentStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        That didn't seem to work
                    </Typography>)}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}