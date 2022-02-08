import SideBar from "../layout/sidebar";
import ChatTopNavBar from "../layout/chattopnavbar";
import ChatMessage from "../components/chatMessage";
import ChatSearchInput from "../components/chatSearchInput";

function Home(){
    return(
        <div className="home">
            <SideBar />
            <div className="home__main-container">
                <ChatTopNavBar />
                <div className="home__chatmessageList">
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                    <ChatMessage 
                        msgTxt="Hey Belinda. Is the lesson on?"
                        time_sent="10:30pm"
                    />
                </div>
                <ChatSearchInput />
            </div>
        </div>
    )
}

export default Home;