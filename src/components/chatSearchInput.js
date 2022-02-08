function ChatSearchInput(){
    return(
        <form className="chatsearchinput">
            <input 
            type="search" 
            placeholder="Type message"
            className="chatsearchinput__field" />
            <button>
                Send
            </button>
        </form>
    )
}

export default ChatSearchInput;