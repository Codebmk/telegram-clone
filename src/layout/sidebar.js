import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckIcon from '@mui/icons-material/Check';

export default function SideBar() {
    return(
        <div className="sidebar">
            <div className="sidebar__menu">
                <div className="sidebar__menuTop">
                    <MenuIcon />
                    <div className="sidebar__search">
                        <SearchIcon className="sidebar__searchIcon" />
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="sidebar__searchInput" 
                        />
                    </div>
                </div>
                <div className="sidebar__menuBottom">
                    <div className="sidebar__tab">
                        <h3 className="sidebar__tabOption">All</h3>
                        <h3 className="sidebar__tabOption">ReadBuddy</h3>
                    </div>
                </div>
            </div>
            <div className="sidebar__messageList">
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>Saved Messages</h3>
                        <p>Sending</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            <CheckIcon className="sidebar__checkIcon"/>
                            <small>12:30</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>5</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>TON Community</h3>
                        <p>Group Help: To avoid spam ...</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            {/* <CheckIcon /> */}
                            <small>16:12</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>282</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>Interesting Engineering</h3>
                        <p>How to build a mini road ...</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            <small>16:00</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>7</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>Phaneroo</h3>
                        <p>moses: Video</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            <small>15:19</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>94</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>Terry William</h3>
                        <p>let's kidnap Victor</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            <small>14:34</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>Terry William</h3>
                        <p>let's kidnap Victor</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            <small>14:34</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar__messageItem">
                    <AccountCircleIcon className="sidebar__messageProfileImg" />
                    <div className="sidebar__messageDetails">
                        <h3>Terry William</h3>
                        <p>let's kidnap Victor</p>
                    </div>
                    <div className="sidebar__messageRight">
                        <div className="sidebar__messagetopDisplay">
                            <small>14:34</small>
                        </div>
                        <div className="sidebar__numOfUnreadMessages">
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}