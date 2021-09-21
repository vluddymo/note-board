import EditIcon from '@material-ui/icons/Edit';
import {IconButton} from "@material-ui/core";

export default function EditButton({handleClick}) {


    return (
            <IconButton aria-label="delete">
                <EditIcon color="primary" onClick={handleClick}/>
            </IconButton>

    )
}