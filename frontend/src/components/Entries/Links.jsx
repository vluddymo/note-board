import {Link, makeStyles} from "@material-ui/core";
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


export default function Links() {

    const {links} = useContext(NoteStateContext);
    const classes = useStyles();

    return links.map((link) => (
        <div className={classes.entry} key={link.linkId}>
            <Link href={link.linkUrl} underline="hover">
                {link.linkDescription}
            </Link>
        </div>
    ))

}