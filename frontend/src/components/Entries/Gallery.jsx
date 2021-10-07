import {makeStyles} from "@material-ui/core";
import {useContext} from "react";
import {NoteStateContext} from "../../context/notes/noteContext";

const useStyles = makeStyles((theme) => ({
    entry: {
        borderRadius: "5px",
        marginBottom: theme.spacing(1)
    },

    image: {
        width: "100%",
        borderRadius: "5px"
    }
}));


export default function Gallery() {

    const {gallery} = useContext(NoteStateContext);
    const classes = useStyles();

    return (
            gallery.map((item) => (
            <div key={item.galleryItemId} className={classes.entry} >
                <img
                    src={item.imgUrl}
                    alt={item.imgDescription}
                    loading="lazy"
                    className={classes.image}
                />
            </div>))

    )
}