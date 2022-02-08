import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ChatTopNavBar() {
    return(
        <div className="chattopnavbar">
            <div className="chattopnavbar__leftOptions">
                <AccountCircleIcon />
                <div className="chattopnavbar__profileDetails">
                    <h3>Belinda Marion</h3>
                    <small>last seen just now</small>
                </div>
            </div>
            <div className="chattopnavbar__rightOptions">
                <SearchIcon className="chattopnavbar__iconOption" />
                <CallIcon className="chattopnavbar__iconOption" />
                <MoreVertIcon className="chattopnavbar__iconOption" />
            </div>
        </div>
    )
}