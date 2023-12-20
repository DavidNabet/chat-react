import {Compose, List, Message, Sidebar} from "../components"

function Chat() {
  return (
    <main>
      <Sidebar />
      <div className="message-list">
        <List />
      </div>
      <div className="message-area" style={{position: "relative"}}>
          <Message />
          <Compose />
      </div>
    </main>
  )
}

export default Chat