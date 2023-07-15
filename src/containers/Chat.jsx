import {Compose, List, Message, Sidebar} from "../components"

function Chat() {
  return (
    <>
<div class="navigation">
   <Sidebar />
</div>
<div class="message-list">
    <List />
</div>
<div class="message-area" style="position: relative;">
    <Message />
    <Compose />
</div>
</>
  )
}

export default Chat