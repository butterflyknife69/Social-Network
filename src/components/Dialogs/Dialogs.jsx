import s from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)
  let newMessageBody = state.newMessageBody;
  let onSendMessageClic = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea value={newMessageBody} onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClic}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

