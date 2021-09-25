import SettingsIcon from '@mui/icons-material/Settings';
import {IconButton} from "@material-ui/core";

export default function SettingsButton({handleClick}) {


    return (
        <IconButton>
            <SettingsIcon color="action" onClick={handleClick}/>
        </IconButton>
    )
}