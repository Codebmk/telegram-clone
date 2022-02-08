function ChatMessage({msgTxt, time_sent, sender}){
    return(
        <div className="chatmessage">
            {/* <h3 className="chatmessage__sender">{sender.username}</h3> */}
            <p className="chatmessage__messagetxt">{msgTxt}</p>
            <small className="chatmessage__timesent">{time_sent}</small>
        </div>
    )
}

export default ChatMessage;